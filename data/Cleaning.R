library(sf)
library(dplyr)
library(readr)
library(tidygeocoder)
library(readxl)
library(tidycensus)
library(tidyverse)
library(ggplot2)
library(scales)
library(tigris)


data <- read.csv("SBS_Certified_Business_List_20260404.csv", as.is = TRUE)

data <- data %>%
  mutate(
    full_address = str_squish(
      paste(
        Mailing_Address_Line_1,
        ifelse(is.na(Mailing_Address_Line_2), "", Mailing_Address_Line_2),
        Mailing_City,
        Mailing_State,
        Mailing_Zip
      )
    )
  )
  
# missing_geo <- data %>%
#   filter(is.na(Latitude) | is.na(Longitude)) %>% 
#   geocode(address = full_address, method = "census") 
#   
# missing_geo <- missing_geo %>% 
#   select(Account_Number, lat, long)
# 
# zipcodes_df <- read_excel("zipcodes.xlsx")
# zipcodes <- zipcodes_df %>% 
#   select(ZIPCODES) %>% 
#   mutate(ZIPCODES = as.integer(ZIPCODES)) %>% 
#   as.list()

# data_clean <- data %>%
#   left_join(missing_geo, by = "Account_Number") %>% 
#   mutate(Latitude = if_else(is.na(Latitude),
#                             lat,
#                             Latitude),
#          Longitude = if_else(is.na(Longitude),
#                              long,
#                              Longitude)) %>% 
#   select(-c(lat, long)) %>% 
#   filter(!is.na(Latitude)) %>% 
#   filter(Postcode %in% zipcodes[[1]])

data_clean <- data %>%
  filter(!is.na(Latitude))

points <- st_as_sf(data_clean, coords = c("Longitude", "Latitude"), crs = 4326)

st_write(points, dsn = "SBS_data.geojson", delete_dsn = TRUE)

table(data_clean$Certification)


census_api_key("0267dd4173bbe146ae016e098530d9234ff553bc", install = TRUE, overwrite = TRUE)

vars <- c(
  # Population
  total_pop = "B01001_001",
  pop_16plus = "B23025_001",
  
  # Poverty
  pov_total = "B17001_001",
  pov_below = "B17001_002",
  
  # Labor
  labor_force = "B23025_003",
  unemployed  = "B23025_005",
  
  # Income
  median_income = "B19013_001",
  
  # Race
  white     = "B02001_002",
  black     = "B02001_003",
  asian     = "B02001_005",
  hispanic  = "B03002_012",
  
  # Education (bachelor's+ = categories 21–25)
  edu_total = "B15003_001",
  edu_ba    = "B15003_022",
  edu_ma    = "B15003_023",
  edu_prof  = "B15003_024",
  edu_phd   = "B15003_025",
  
  # Housing
  housing_total = "B25003_001",
  owner_occ     = "B25003_002",
  
  # Rent burden
  rent_total = "B25070_001",
  rent_30_34 = "B25070_007",
  rent_35_39 = "B25070_008",
  rent_40_49 = "B25070_009",
  rent_50plus = "B25070_010",
  
  # SNAP
  snap_total = "B22010_001",
  snap_yes   = "B22010_002",
  
  # Health insurance
  insured_total = "B27001_001",
  uninsured     = "B27001_002",
  
  # industry
  ind_total = "C24030_001",
  
  ind_agriculture = "C24030_002",
  ind_construction = "C24030_003",
  ind_manufacturing = "C24030_004",
  
  ind_retail = "C24030_008",
  ind_transport = "C24030_009",
  
  ind_information = "C24030_010",
  ind_finance = "C24030_011",
  
  ind_professional = "C24030_012",
  ind_education_health = "C24030_013",
  
  ind_arts = "C24030_014",
  ind_other = "C24030_015",
  ind_public_admin = "C24030_016"
)

nyc <- get_acs(
  geography = "tract",
  variables = vars,
  state = "NY",
  county = c("New York", "Kings", "Queens", "Bronx", "Richmond"),
  year = 2024,
  survey = "acs5",
  geometry = TRUE,
  output = "wide", 
  cb = FALSE
)

nyc <- nyc %>%
  mutate(
    
    # -------------------------
    # ECONOMIC
    # -------------------------
    poverty_rate = pov_belowE / pov_totalE,
    
    unemployment_rate = unemployedE / labor_forceE,
    lfpr = labor_forceE / pop_16plusE,
    
    median_income = median_incomeE,
    
    snap_rate = snap_yesE / snap_totalE,
    
    # -------------------------
    # DEMOGRAPHICS
    # -------------------------
    pct_white    = whiteE / total_popE,
    pct_black    = blackE / total_popE,
    pct_asian    = asianE / total_popE,
    pct_hispanic = hispanicE / total_popE,
    predominant_race = case_when(
      pct_white >= pct_black & pct_white >= pct_asian ~ "White",
      pct_black >= pct_white & pct_black >= pct_asian ~ "Black",
      pct_asian >= pct_white & pct_asian >= pct_black ~ "Asian",
      TRUE ~ NA_character_
    ),
    predominant_ethnicity = case_when(
      pct_hispanic >= 0.5 ~ "Hispanic majority",
      pct_hispanic >= 0.3 ~ "Plurality Hispanic",
      TRUE ~ "Non-Hispanic majority"
    ),
    
    
    # -------------------------
    # EDUCATION
    # -------------------------
    bachelors_plus = edu_baE + edu_maE + edu_profE + edu_phdE,
    pct_bachelors_plus = bachelors_plus / edu_totalE,
    
    # -------------------------
    # HOUSING
    # -------------------------
    homeownership_rate = owner_occE / housing_totalE,
    
    rent_burden = (
      rent_30_34E + rent_35_39E + rent_40_49E + rent_50plusE
    ) / rent_totalE,
    
    severe_rent_burden = rent_50plusE / rent_totalE,
    
    # -------------------------
    # HEALTH ACCESS
    # -------------------------
    pct_uninsured = uninsuredE / insured_totalE,
    
    # -------------------------
    # INDUSTRY STRUCTURE
    # -------------------------
    pct_construction = ind_constructionE / ind_totalE,
    pct_manufacturing = ind_manufacturingE / ind_totalE,
    pct_retail = ind_retailE / ind_totalE,
    pct_transport = ind_transportE / ind_totalE,
    pct_information = ind_informationE / ind_totalE,
    pct_finance = ind_financeE / ind_totalE,
    pct_professional = ind_professionalE / ind_totalE,
    pct_education_health = ind_education_healthE / ind_totalE,
    pct_arts = ind_artsE / ind_totalE,
    pct_public_admin = ind_public_adminE / ind_totalE,
    
    poverty_quintile = ntile(poverty_rate, 5)
    
  ) %>% 
  erase_water(year = 2020) %>% 
  filter(total_popE != 0)


# nyc <- nyc %>% 
#   st_make_valid() %>%
#   erase_water(area_threshold = 0.75) %>%
#   st_transform(4326)

ggplot() +
  geom_sf(data = nyc,
    aes(fill = as.factor(poverty_quintile)), color = NA) +
  scale_fill_viridis_d(
    name = "Poverty Quintile",
    labels = c("Lowest", "Low", "Middle", "High", "Highest")) +
  labs(
    title = "Poverty Rate by Census Tract (NYC)",
    subtitle = "ACS 2020–2024 5-year",
    fill = "Poverty"
  ) +
  theme_minimal() + 
  geom_sf(data = points)


st_write(nyc, dsn = "nyc_census_data.geojson", delete_dsn = TRUE)


table(data_clean$NAICS_Sector)
