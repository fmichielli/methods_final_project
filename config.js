var config = {
    style: 'mapbox://styles/fmichielli/cmnquzlk7003k01s73ydzf20n',
    accessToken: 'pk.eyJ1IjoiZm1pY2hpZWxsaSIsImEiOiJjbW43dTZuYmQwNGFmMm9xNW5lbHRseTR5In0.2dn0F7JMPo6G-oSdVe5dNg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Small Businesses of New York City',
    subtitle: "How do Small Businesses Contribute to NYC's Communities?",
    byline: 'By Frankie Michielli, Aishwarya Warad, and Dajin Wang',
    footer: 'Source: SBS Certified Business List, NYC OpenData. Census Data, ACS.',
    chapters: [
        {
            id: 'chapter-1',
            alignment: 'center',
            hidden: false,
            title: 'Small Businesses',
            description: "Small businesses are a vital part of NYC's economy and community development. The blue dots represent the locations of small businesses registered with the Department of Small Business Services.",
            location: {
                center: [ -73.945036, 40.734321],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                 layer: 'sbs-points-basic',
                 opacity: 1,
                 duration: 3000
                 },
                {
                    layer: 'sbs-points',
                    opacity: 0,
                    duration: 3000
                    },
                {
                    layer: 'sbs-points-business-cat',
                    opacity: 0,
                    duration: 3000
                    },
                {
                    layer: 'sbs-points race',
                    opacity: 0,
                    duration: 3000
                    },                    
                {
                    layer: 'census-data-ethnicity',
                    opacity: 0,
                    duration: 3000
                        },
                {
                    layer: 'census-data-race',
                    opacity: 0,
                    duration: 3000
                    },
               
                {
                    layer: 'census-data-poverty',
                    opacity: 0,
                    duration: 3000
                    }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter-2',
            alignment: 'left',
            hidden: false,
            title: 'Women, Minority-Owned, and Emerging Business Enterprises',
            description: 'Through the Small Business Services certification program, the City certifies, promotes, and fosters the growth of the minority and women-owned businesses. SBS provides these businesses with mentorship programs, access to contracting opportunities, and networking opportunities.',
            location: {
                center: [-73.945036, 40.734321],
                zoom: 11,
                pitch: 0,
                bearing: 0
            }
            ,mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'sbs-points-basic',
                    opacity: 0,
                    duration: 3000
                    },
                   {
                       layer: 'sbs-points',
                       opacity: 1,
                       duration: 3000
                       },
                   {
                       layer: 'sbs-points-business-cat',
                       opacity: 0,
                       duration: 3000
                       },

                   {
                       layer: 'census-data-ethnicity',
                       opacity: 0,
                       duration: 3000
                           },
                   {
                       layer: 'census-data-race',
                       opacity: 0,
                       duration: 3000
                       },
                  
                   {
                       layer: 'census-data-poverty',
                       opacity: 0,
                       duration: 3000
                       }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-3',
            alignment: 'left',
            hidden: false,
            title: 'Williamsburg and Greenpoint, Brooklyn, are hubs for women-owned businesses, marked in green.',
            description: '',
            location: {
                center: [-73.94943, 40.71448],
                zoom: 13,
                pitch: 0,
                bearing: 0
            }
            ,mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'sbs-points-basic',
                    opacity: 0,
                    duration: 3000
                    },
                   {
                       layer: 'sbs-points',
                       opacity: 1,
                       duration: 3000
                       },
                   {
                       layer: 'sbs-points-business-cat',
                       opacity: 0,
                       duration: 3000
                       },

                   {
                       layer: 'census-data-ethnicity',
                       opacity: 0,
                       duration: 3000
                           },
                   {
                       layer: 'census-data-race',
                       opacity: 0,
                       duration: 3000
                       },
                  
                   {
                       layer: 'census-data-poverty',
                       opacity: 0,
                       duration: 3000
                       }
            ],
            onChapterExit: []
        },

        {
            id: 'chapter-4',
            alignment: 'right',
            hidden: false,
            title: 'Meanwhile, neighboring Bed-Stuy is a hub for minority-owned businesses. In particular, minority and women owned businesses, marked in light blue, dominate.',
            description: '',
            location: {
                center: [-73.94027, 40.68367],
                zoom: 13,
                pitch: 0,
                bearing: 0
            }
            ,mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'sbs-points-basic',
                    opacity: 0,
                    duration: 3000
                    },
                   {
                       layer: 'sbs-points',
                       opacity: 1,
                       duration: 3000
                       },
                   {
                       layer: 'sbs-points-business-cat',
                       opacity: 0,
                       duration: 3000
                       },

                   {
                       layer: 'census-data-ethnicity',
                       opacity: 0,
                       duration: 3000
                           },
                   {
                       layer: 'census-data-race',
                       opacity: 0,
                       duration: 3000
                       },
                  
                   {
                       layer: 'census-data-poverty',
                       opacity: 0,
                       duration: 3000
                       }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-5',
            alignment: 'center',
            hidden: false,
            title: "Poverty Rates Across NYC's Neighborhoods",
            description: "According to New York officials, small businesses are the backbone of the city's economy, and have been critical in the New York City's recovery from the COVID pandemic. Let's investigate the relationship between small businesses and poverty rates across the city. The census layer shows the poverty rates across NYC's neighborhoods, with darker colors representing higher poverty rates.",
            location: {
                center: [-73.945036, 40.734321],
                zoom: 10,
                pitch: 0,
                bearing: 0
            }
            ,mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'sbs-points-basic',
                    opacity: 0,
                    duration: 3000
                    },
                   {
                       layer: 'sbs-points',
                       opacity: 1,
                       duration: 3000
                       },
                   {
                       layer: 'sbs-points-business-cat',
                       opacity: 0,
                       duration: 3000
                       },

                   {
                       layer: 'census-data-ethnicity',
                       opacity: 0,
                       duration: 3000
                           },
                   {
                       layer: 'census-data-race',
                       opacity: 0,
                       duration: 3000
                       },
                  
                   {
                       layer: 'census-data-poverty',
                       opacity: 1,
                       duration: 3000
                       }
            ],
            onChapterExit: []
        },

        {
            id: 'chapter-6',
            alignment: 'left',
            hidden: false,
            title: 'South Bronx',
            description: 'The South Bronx is afflicted with high poverty rates, and, compared with neighboring Manhattan, has a relatively low density of small businesses. Nonetheless, minority business owners represent a significant portion of the small business community in the South Bronx.',
            location: {
                center: [-73.92743, 40.81341],
                zoom: 13,
                pitch: 0,
                bearing: 0
            }
            ,mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'sbs-points-basic',
                    opacity: 0,
                    duration: 3000
                    },
                   {
                       layer: 'sbs-points',
                       opacity: 1,
                       duration: 3000
                       },
                   {
                       layer: 'sbs-points-business-cat',
                       opacity: 0,
                       duration: 3000
                       },

                   {
                       layer: 'census-data-ethnicity',
                       opacity: 0,
                       duration: 3000
                           },
                   {
                       layer: 'census-data-race',
                       opacity: 0,
                       duration: 3000
                       },
                  
                   {
                       layer: 'census-data-poverty',
                       opacity: 0.8,
                       duration: 3000
                       }
            ],
            onChapterExit: []
        },

        {
            id: 'chapter-7',
            alignment: 'center',
            hidden: false,
            title: "Let's dive deeper into the relationship between the predominant neighborhood race and business owner race",
            location: {
                center: [ -73.945036, 40.734321],
                zoom: 11,
                pitch: 0,
                bearing: 0
            }
            ,mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'hideNeighborhoods',
            onChapterEnter: [
                {
                    layer: 'sbs-points-basic',
                    opacity: 0,
                    duration: 3000
                    },
                   {
                       layer: 'sbs-points',
                       opacity: 0,
                       duration: 3000
                       },
                {
                    layer: 'sbs-points race',
                    opacity: 1,
                    duration: 3000
                  },    
                   {
                       layer: 'sbs-points-business-cat',
                       opacity: 0,
                       duration: 3000
                       },
  
                   {
                       layer: 'census-data-ethnicity',
                       opacity: 0,
                       duration: 3000
                           },
                   {
                       layer: 'census-data-race',
                       opacity: 0.8,
                       duration: 3000
                       },
                  
                   {
                       layer: 'census-data-poverty',
                       opacity: 0,
                       duration: 3000
                       }
            ],
            onChapterExit: []
        },

        {
            id: 'chapter-8',
            alignment: 'center',
            hidden: false,
            title: "Broadly, there is correlation between the race of the business owner and the predominant race in the neighborhood",
            location: {
                center: [ -73.945036, 40.734321],
                zoom: 11,
                pitch: 0,
                bearing: 0
            }
            ,mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'hideNeighborhoods',
            onChapterEnter: [
                {
                    layer: 'sbs-points-basic',
                    opacity: 0,
                    duration: 3000
                    },
                   {
                       layer: 'sbs-points',
                       opacity: 0,
                       duration: 3000
                       },
                {
                    layer: 'sbs-points race',
                    opacity: 1,
                    duration: 3000
                  },    
                   {
                       layer: 'sbs-points-business-cat',
                       opacity: 0,
                       duration: 3000
                       },

                   {
                       layer: 'census-data-ethnicity',
                       opacity: 0,
                       duration: 3000
                           },
                   {
                       layer: 'census-data-race',
                       opacity: 0.8,
                       duration: 3000
                       },
                  
                   {
                       layer: 'census-data-poverty',
                       opacity: 0,
                       duration: 3000
                       }
            ],
            onChapterExit: []
        },

        
        {
            id: 'chapter-9',
            alignment: 'right',
            hidden: false,
            title: 'This pattern is highlighted well in South Queens. South Ozone Park, which is majority Asian, has a higher density of Asian-owned businesses, while South Jamaica and Springfield Gardens, which are majority Black, have a higher density of Black-owned businesses.',
            location: {
                center: [ -73.778019, 40.683592],
                zoom: 12,
                pitch: 0,
                bearing: 0
            }
            ,mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showQueensLabels',
            onChapterEnter: [
                {
                    layer: 'sbs-points-basic',
                    opacity: 1,
                    duration: 3000
                    },
                   {
                       layer: 'sbs-points',
                       opacity: 0,
                       duration: 3000
                       },
                   {
                       layer: 'sbs-points-business-cat',
                       opacity: 0,
                       duration: 3000
                       },



                {
                    layer: 'sbs-points race',
                    opacity: 0.8,
                    duration: 3000
                  },    
                   {
                       layer: 'census-data-ethnicity',
                       opacity: 0,
                       duration: 3000
                           },
                   {
                       layer: 'census-data-race',
                       opacity: 1,
                       duration: 3000
                       },
                  
                   {
                       layer: 'census-data-poverty',
                       opacity: 0,
                       duration: 3000
                       }
            ],
            onChapterExit: []
        },
 
        {
            id: 'chapter-10',
            alignment: 'right',
            hidden: false,
            title:  'The same pattern also appears in Upper Manhattan. In Harlem and East Harlem, where the predominant census race is Black, there is a higher concentration of Black-owned businesses. By contrast, in the neighboring Upper West Side and Upper East Side, where the predominant census race is White, there are more non-minority-owned businesses.',
            location: {
                center: [ -73.950466, 40.802120],
                zoom: 12,
                pitch: 0,
                bearing: 0
            }
            ,mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showUptownLabels',
            onChapterEnter: [
                {
                    layer: 'sbs-points-basic',
                    opacity: 1,
                    duration: 3000
                    },
                   {
                       layer: 'sbs-points',
                       opacity: 0,
                       duration: 3000
                       },
                   {
                       layer: 'sbs-points-business-cat',
                       opacity: 0,
                       duration: 3000
                       },
   

                {
                    layer: 'sbs-points race',
                    opacity: 0.8,
                    duration: 3000
                  },    
                   {
                       layer: 'census-data-ethnicity',
                       opacity: 0,
                       duration: 3000
                           },
                   {
                       layer: 'census-data-race',
                       opacity: 1,
                       duration: 3000
                       },
                  
                   {
                       layer: 'census-data-poverty',
                       opacity: 0,
                       duration: 3000
                       }
            ],
            onChapterExit: []
        },

// Replace your current chapter-11 block with these new chapters.
// Keep explore-map after these chapters.

    {
        id: 'chapter-11',
        alignment: 'right',
        hidden: false,
        title: 'This pattern is not uniform across the city. Midtown and Lower Manhattan have a more mixed set of business owner race and ethnicity, reflecting their dense and varied daytime populations.',
        location: {
            center: [-73.989, 40.735],
            zoom: 12,
            pitch: 0,
            bearing: 0
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: 'showLowerManhattanLabels',
        onChapterEnter: [
            {
                layer: 'sbs-points-basic',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'sbs-points',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'sbs-points-business-cat',
                opacity: 0,
                duration: 3000
            },

            {
                layer: 'sbs-points race',
                opacity: 0.8,
                duration: 3000
            },
            {
                layer: 'census-data-ethnicity',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-race',
                opacity: 1,
                duration: 3000
            },
            {
                layer: 'census-data-poverty',
                opacity: 0,
                duration: 3000
            }
        ],
        onChapterExit: []
    },

    {
        id: 'chapter-12',
        alignment: 'center',
        hidden: false,
        title: 'Now, let\'s look at Hispanic ethnicity. The Census tracks race and ethnicity as separate categories, while the SBS business owner data groups race and ethnicity together. For that reason, we need to examine Hispanic ethnicity separately from the predominant race layer.',
        location: {
            center: [-73.945036, 40.734321],
            zoom: 10,
            pitch: 0,
            bearing: 0
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: 'hideNeighborhoods',
        onChapterEnter: [
            {
                layer: 'sbs-points-basic',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'sbs-points',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'sbs-points-business-cat',
                opacity: 0,
                duration: 3000
            },

            {
                layer: 'sbs-points race',
                opacity: 0.8,
                duration: 3000
            },
            {
                layer: 'census-data-ethnicity',
                opacity: 0.8,
                duration: 3000
            },
            {
                layer: 'census-data-race',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-poverty',
                opacity: 0,
                duration: 3000
            }
        ],
        onChapterExit: []
    },

    {
        id: 'chapter-13',
        alignment: 'right',
        hidden: false,
        title: 'Similarly to the pattern we saw with race, some Hispanic neighborhoods have high concentrations of Hispanic-owned businesses. This is particularly visible in Inwood, Fort George, and Washington Heights in northern Manhattan.',
        location: {
            center: [-73.931, 40.852],
            zoom: 13,
            pitch: 0,
            bearing: 0
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: 'showNorthManhattanLabels',
        onChapterEnter: [
            {
                layer: 'sbs-points-basic',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'sbs-points',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'sbs-points-business-cat',
                opacity: 0,
                duration: 3000
            },
            
            {
                layer: 'sbs-points race',
                opacity: 0.8,
                duration: 3000
            },
            {
                layer: 'census-data-ethnicity',
                opacity: 0.8,
                duration: 3000
            },
            {
                layer: 'census-data-race',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-poverty',
                opacity: 0,
                duration: 3000
            }
        ],
        onChapterExit: []
    },

    {
        id: 'chapter-14',
        alignment: 'left',
        hidden: false,
        title: 'In much of the Bronx, there is a visible mix of Black-owned and Hispanic-owned businesses, likely reflecting the borough\'s mixed racial and ethnic population.',
        location: {
            center: [-73.889, 40.844],
            zoom: 11.5,
            pitch: 0,
            bearing: 0
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: 'hideNeighborhoods',
        onChapterEnter: [
            {
                layer: 'sbs-points-basic',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'sbs-points',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'sbs-points-business-cat',
                opacity: 0,
                duration: 3000
            },
 
            {
                layer: 'sbs-points race',
                opacity: 0.8,
                duration: 3000
            },
            {
                layer: 'census-data-ethnicity',
                opacity: 0.65,
                duration: 3000
            },
            {
                layer: 'census-data-race',
                opacity: 0.0,
                duration: 3000
            },
            {
                layer: 'census-data-poverty',
                opacity: 0,
                duration: 3000
            }
        ],
        onChapterExit: []
    },

    {
        id: 'chapter-15',
        alignment: 'center',
        hidden: false,
        title: 'Overall, these patterns suggest that the race and ethnicity of small business owners are broadly patterned alongside the racial and ethnic composition of neighborhoods. The relationship is not perfect or uniform, but the spatial clustering is clear across several parts of the city.',
        location: {
            center: [-73.945036, 40.734321],
            zoom: 11,
            pitch: 0,
            bearing: 0
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: 'hideNeighborhoods',
        onChapterEnter: [
            {
                layer: 'sbs-points-basic',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'sbs-points',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'sbs-points-business-cat',
                opacity: 0,
                duration: 3000
            },

            {
                layer: 'sbs-points race',
                opacity: 0.8,
                duration: 3000
            },
            {
                layer: 'census-data-ethnicity',
                opacity: 0.65,
                duration: 3000
            },
            {
                layer: 'census-data-race',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-poverty',
                opacity: 0,
                duration: 3000
            }
        ],
        onChapterExit: []
    },

    {
        id: 'chapter-16',
        alignment: 'center',
        hidden: false,
        title: 'Business Sectors',
        description: 'We can also understand the sectors in which small businesses operate across the city. The SBS data categorizes businesses into 20 different sectors, including construction, retail, food services, and education services. We grouped them into 8 broad categories.',
        location: {
            center: [-73.945036, 40.734321],
            zoom: 11,
            pitch: 0,
            bearing: 0
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        onChapterEnter: [
            {
                layer: 'sbs-points-basic',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'sbs-points',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'sbs-points-business-cat',
                opacity: 1,
                duration: 3000
            },

            {
                layer: 'sbs-points race',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-ethnicity',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-race',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-poverty',
                opacity: 0,
                duration: 3000
            }
        ],
        onChapterExit: []
    },


    {
        id: 'chapter-17',
        alignment: 'center',
        hidden: false,
        title: 'Professional, Scientific, Technical, Financial, and Agricultural Service, marked in grey, make up the majority of small business across the city, with Construction in a close second.',
        description: '',
        location: {
            center: [-73.945036, 40.734321],
            zoom: 11,
            pitch: 0,
            bearing: 0
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        onChapterEnter: [
            {
                layer: 'sbs-points-basic',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'sbs-points',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'sbs-points-business-cat',
                opacity: 1,
                duration: 3000
            },

            {
                layer: 'sbs-points race',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-ethnicity',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-race',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-poverty',
                opacity: 0,
                duration: 3000
            }
        ],
        onChapterExit: []
    },


    {
        id: 'chapter-18',
        alignment: 'right',
        hidden: false,
        title: 'Construction in Richmond Hill and Morris Park',
        description: 'Richmond Hill and Morris Park, Queens, are hubs for construction business, marked in pink. These businesses provide a range of services, including painting and home improvement, steel fabrication, masonry, carpentry, and drywall services.',
        location: {
            center: [-73.828027, 40.690601],
            zoom: 12,
            pitch: 0,
            bearing: 0
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        onChapterEnter: [
            {
                layer: 'sbs-points-basic',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'sbs-points',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'sbs-points-business-cat',
                opacity: 1,
                duration: 3000
            },


            {
                layer: 'sbs-points race',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-ethnicity',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-race',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-poverty',
                opacity: 0,
                duration: 3000
            }
        ],
        onChapterExit: []
    },


    {
        id: 'chapter-19',
        alignment: 'right',
        hidden: false,
        title: 'Education, Health Care, and Social Assistance',
        description: 'Businesses that provide education, health care, and social assistance services (marked in green) are well distributed throughout the city, particularly in Manhattan, the Bronx, and Brooklyn. However, there are gaps in the middle of Queens and throughout Staten Island.',
        location: {
            center: [-73.94, 40.735],
            zoom: 11,
            pitch: 0,
            bearing: 0
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        onChapterEnter: [
            {
                layer: 'sbs-points-basic',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'sbs-points',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'sbs-points-business-cat',
                opacity: 1,
                duration: 3000
            },


            {
                layer: 'sbs-points race',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-ethnicity',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-race',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-poverty',
                opacity: 0,
                duration: 3000
            }
        ],
        onChapterExit: []
    },

    {
        id: 'chapter-20',
        alignment: 'center',
        hidden: false,
        title: 'Who is actually represented in the SBS data?',
        description: 'The SBS data shows only registered small M/WBE and EBEs; the majority of small businesses in the city are not registered with SBS. For that reason, the SBS data is not fully representative of the small business landscape across the city. It instead provides a glimpse into small business activity for a select sample.',
        location: {
            center: [-73.94, 40.735],
            zoom: 11,
            pitch: 0,
            bearing: 0
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        onChapterEnter: [
            {
                layer: 'sbs-points-basic',
                opacity: 1,
                duration: 3000
            },
            {
                layer: 'sbs-points',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'sbs-points-business-cat',
                opacity: 0,
                duration: 3000
            },


            {
                layer: 'sbs-points race',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-ethnicity',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-race',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-poverty',
                opacity: 0,
                duration: 3000
            }
        ],
        onChapterExit: []
    },

    {
        id: 'chapter-21',
        alignment: 'center',
        hidden: false,
        title: 'Why do small businesses register with SBS?',
        description: 'Certified businesses are more easily able to compete for City contracts, which total $17 billion each year. Participating businesses can also access exclusive programs to help their businesses grow. Thus, there is bias in who registers with SBS, as businesses that are more likely to seek out government contracts and growth opportunities are more likely to register.', 
        location: {
            center: [-73.94, 40.735],
            zoom: 11,
            pitch: 0,
            bearing: 0
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        onChapterEnter: [
            {
                layer: 'sbs-points-basic',
                opacity: 1,
                duration: 3000
            },
            {
                layer: 'sbs-points',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'sbs-points-business-cat',
                opacity: 0,
                duration: 3000
            },

   
            {
                layer: 'sbs-points race',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-ethnicity',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-race',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-poverty',
                opacity: 0,
                duration: 3000
            }
        ],
        onChapterExit: []
    },



    {
        id: 'chapter-22',
        alignment: 'center',
        hidden: false,
        title: 'Who is excluded?',
        description: 'This begs the question: which M/WBE businesses are not registered with SBS, and why? Arduous paperwork, long processing times, inaccessibility to application support, and lack of program awareness may all contribute to lower registration rates among certain groups of M/WBE business owners.', 
        location: {
            center: [-73.94, 40.735],
            zoom: 11,
            pitch: 0,
            bearing: 0
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        onChapterEnter: [
            {
                layer: 'sbs-points-basic',
                opacity: 1,
                duration: 3000
            },
            {
                layer: 'sbs-points',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'sbs-points-business-cat',
                opacity: 0,
                duration: 3000
            },



            {
                layer: 'sbs-points race',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-ethnicity',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-race',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-poverty',
                opacity: 0,
                duration: 3000
            }
        ],
        onChapterExit: []
    },

    {
        id: 'chapter-23',
        alignment: 'center',
        hidden: false,
        callback: 'hideMissingBusiness',
        title: 'Non-SBS Small Businesses',
        description: 'To better understand the lived experiences behind the mapped datasets, we conducted interviews with several long-standing small businesses across Manhattan and Brooklyn. None of these businesses are a part of our dataset, but they provide crucial insight into the everyday realities of operating small businesses in New York City', 
        location: {
            center: [-73.94, 40.735],
            zoom: 11,
            pitch: 0,
            bearing: 0
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        onChapterEnter: [
            {
                layer: 'sbs-points-basic',
                opacity: 1,
                duration: 3000
            },
            {
                layer: 'sbs-points',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'sbs-points-business-cat',
                opacity: 0,
                duration: 3000
            },

 

            {
                layer: 'sbs-points race',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-ethnicity',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-race',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-poverty',
                opacity: 0,
                duration: 3000
            }
        ],
        onChapterExit: []
    },


    {
        id: 'chapter-24',
        alignment: 'left',
        hidden: false,
    
        title: 'Garcia Hardware & Households',
    
        description: `
        <h4>Long-Term Neighborhood Infrastructure</h4>
        
        <p>
        Garcia Hardware has operated in the neighborhood since 1994, serving local residents,
        Columbia students, and long-term regular customers for over 30 years. The interview
        emphasized the importance of neighborhood familiarity and affordability in sustaining
        a family-owned small business, while also highlighting the growing pressure of rent
        increases and operating costs.
        </p>
        
        <ul>
          <li>Over 30 years of operation in the Upper West Side</li>
          <li>Strong reliance on local residents and Columbia students</li>
          <li>Family-owned “mom-and-pop” business model</li>
          <li>Rising rent and taxes create long-term pressure</li>
        </ul>
        `,

        location: {
            center: [-73.961333, 40.800944],
            zoom: 17,
            pitch: 45,
            bearing: 0
        },
    
        mapAnimation: 'flyTo',
        rotateAnimation: false,
    
        callback: 'showGarciaHardware',
    
        onChapterEnter: [
            {
                layer: 'sbs-points-basic',
                opacity: 1,
                duration: 3000
            },
            {
                layer: 'sbs-points',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'sbs-points-business-cat',
                opacity: 0,
                duration: 3000
            },


            {
                layer: 'sbs-points race',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-ethnicity',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-race',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-poverty',
                opacity: 0,
                duration: 3000
            }
        ],
    
        onChapterExit: []
    },
    
    {
        id: 'chapter-25',
        alignment: 'right',
        hidden: false,
    
        title: 'Roti Roll (Bombay Frankie)',
    
        description: `
        <h4>Community Identity and Local Belonging</h4>

        <p>
        Roti Roll (Bombay Frankie) described themselves as neighborhood staples that have
        served local residents, students, and LGBTQ+ communities for approximately
        22 years. The businesses emphasized affordable food, familiar social space,
        and long-term customer relationships as central to their identity, while
        expressing concern about increasing rents and corporate expansion.
        </p>

        <ul>
        <li>Approximately 22 years in the neighborhood</li>
        <li>Affordable food and inclusive social space</li>
        <li>LGBTQ+ safe space and community gathering</li>
        <li>Concerns over rising rents and commercial displacement</li>
        </ul>
        `,

        location: {
            center: [-73.964333, 40.802556],
            zoom: 17,
            pitch: 45,
            bearing: 0
        },
    
        mapAnimation: 'flyTo',
        rotateAnimation: false,
    
        callback: 'showRotiRoll',
    
        onChapterEnter: [
            {
                layer: 'sbs-points-basic',
                opacity: 1,
                duration: 3000
            },
            {
                layer: 'sbs-points',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'sbs-points-business-cat',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'sbs-points race',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-ethnicity',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-race',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-poverty',
                opacity: 0,
                duration: 3000
            }
        ],
    
        onChapterExit: []
    },
    
    {
        id: 'chapter-26',
        alignment: 'left',
        hidden: false,
    
        title: 'BK Gangnam',
    
       description: `
        <h4>Immigrant Entrepreneurship and Urban Change</h4>

        <p>
        The BK Gangnam interview reflected how immigrant entrepreneurship and changing
        urban conditions shape small business experiences over time. Around a decade
        ago, when first entering the business in Astoria, the owner described
        difficulties accessing business networks and navigating strict landlord systems
        with limited information and institutional support. In contrast, Brooklyn’s
        more systematized commercial environment was described as easier to operate
        within despite high taxes and operational costs. The business has also benefited
        from increased foot traffic and the recent rise of Korean popular culture.
        </p>

        <ul>
        <li>Earlier barriers to accessing business communities and information</li>
        <li>Difficult landlord and institutional systems in Astoria</li>
        <li>More structured commercial environment in Brooklyn</li>
        <li>Increased revenue linked to Korean cultural visibility and urban growth</li>
        </ul>
        `,
        location: {
            center: [-73.983250, 40.690667],
            zoom: 17,
            pitch: 45,
            bearing: 0,
            duration: 10000
        },
    
        mapAnimation: 'flyTo',
        rotateAnimation: false,
    
        callback: 'showBKGangnam',
    
        onChapterEnter: [
            {
                layer: 'sbs-points-basic',
                opacity: 1,
                duration: 3000
            },
            {
                layer: 'sbs-points',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'sbs-points-business-cat',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'sbs-points race',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-ethnicity',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-race',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-poverty',
                opacity: 0,
                duration: 3000
            }
        ],
    
        onChapterExit: []
    },

    {
        id: 'chapter-27',
        alignment: 'center',
        hidden: false,
        callback: 'hideMissingBusiness',
        title: 'Interviews and Lived Experiences',
        description: `
        <p>
        While quantitative mapping identified broader spatial and demographic patterns
        of small businesses across New York City, the interviews revealed lived
        experiences and institutional challenges that could not be fully captured
        through datasets alone.
        </p>
        
        <p>
        The interviews suggested that small businesses are shaped not only by location
        and economics, but also by:
        </p>
        
        <ul>
          <li>Long-term neighborhood relationships</li>
          <li>Accessibility of information and business networks</li>
          <li>Immigrant experience and cultural change</li>
          <li>Perceptions of development and commercialization</li>
          <li>Differing relationships to community and institutional systems</li>
        </ul>
        
        <p>
        Together, the interviews helped explain not only where businesses exist,
        but also how they survive, adapt, and navigate changing urban conditions
        over time.
        </p>

        
        `,        location: {
            center: [-73.94, 40.735],
            zoom: 12,
            pitch: 0,
            bearing: 0
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        onChapterEnter: [
            {
                layer: 'sbs-points-basic',
                opacity: 1,
                duration: 3000
            },
            {
                layer: 'sbs-points',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'sbs-points-business-cat',
                opacity: 0,
                duration: 3000
            },


            {
                layer: 'sbs-points race',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-ethnicity',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-race',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-poverty',
                opacity: 0,
                duration: 3000
            }
        ],
        onChapterExit: []
    },

    

    {
        id: 'chapter-28',
        alignment: 'center',
        hidden: false,
        callback: 'hideMissingBusiness',
        title: 'Takeaways',
        description: `
        <p>
        This map explores the distribution and composition of New York City's small businesses.
        Policymakers, researchers, and advocates can use this data to better understand
        community development and economic growth across the city.
        </p>
        
        <p>
        By identifying patterns and gaps in small business activity, we can work toward
        more equitable and inclusive economic policies that support the diverse needs
        of New York City's communities.
        </p>

        <p>
        Keep scrolling to explore the interactive map!
        </p>
        
        `,        location: {
            center: [-73.94, 40.735],
            zoom: 12,
            pitch: 0,
            bearing: 0
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        onChapterEnter: [
            {
                layer: 'sbs-points-basic',
                opacity: 1,
                duration: 3000
            },
            {
                layer: 'sbs-points',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'sbs-points-business-cat',
                opacity: 0,
                duration: 3000
            },


            {
                layer: 'sbs-points race',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-ethnicity',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-race',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-poverty',
                opacity: 0,
                duration: 3000
            }
        ],
        onChapterExit: []
    },

    {
        id: 'sources',
        alignment: 'center',
        hidden: false,
    
        title: 'Sources and Methods',
    
        description: `
        <div class="sources-box">
        
        <p><strong>Data Sources</strong></p>
        
        <ul>
          <li>
            New York City Department of Small Business Services. 
            “SBS Certified Business List.” NYC OpenData. Accessed May 6, 2026. 
            <a href="https://data.cityofnewyork.us/Business/SBS-Certified-Business-List/ci93-uc8s/about_data" target="_blank">
              https://data.cityofnewyork.us/Business/SBS-Certified-Business-List/ci93-uc8s/about_data
            </a>.
          </li>
        
        
          <li>
            U.S. Census Bureau. American Community Survey 5-Year Estimates. Accessed through tidycensus and NYC census tract shapefiles.
          </li>
        </ul>
        
        <p><strong>Reports and References</strong></p>
        
        <ul>
          <li>
            National Federation of Independent Business Research Center. 
            <em>2024 Small Business Contribution to the Community.</em> 
            Washington, DC: NFIB Research Center, 2024. 
            <a href="https://nfib.com/wp-content/uploads/2024/11/2024-Small-Business-Contribution-to-the-Community-05.pdf?_gl=1*1ydv20w*_gcl_au*NzMwNTQ2MjU5LjE3NzI3MzMyODc." target="_blank">
              PDF
            </a>.
          </li>


            <li>
            New York City Department of Small Business Services. 
            “Certify with the City.” Accessed May 6, 2026. 
            <a href="https://www.nyc.gov/site/sbs/businesses/certify-with-the-city.page" target="_blank">
              https://www.nyc.gov/site/sbs/businesses/certify-with-the-city.page
            </a>.
          </li>

        </ul>
        
        <p><strong>Interviews</strong></p>
        
        <ul>
          <li>Garcia Hardware & Households interview, 2026.</li>
          <li>Roti Roll (Bombay Frankie) interview, 2026.</li>
          <li>BK Gangnam interview, 2026.</li>
        </ul>
        
        <p><strong>Methods</strong></p>
        
        <p>
        Maps were created using Mapbox GL JS and census tract-level demographic data.
        Business locations reflect SBS-certified businesses and therefore do not
        represent the full universe of small businesses operating in New York City.
        </p>
        
        </div>
        `,
    
        location: {
            center: [-73.945036, 40.734321],
            zoom: 12,
            pitch: 0,
            bearing: 0
        },
    
        mapAnimation: 'flyTo',
        rotateAnimation: false,
    
        callback: 'hideMissingBusiness',
    
        onChapterEnter: [
            {
                layer: 'sbs-points-basic',
                opacity: 1,
                duration: 3000
            },
            {
                layer: 'sbs-points',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'sbs-points-business-cat',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'sbs-points race',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-ethnicity',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-race',
                opacity: 0,
                duration: 3000
            },
            {
                layer: 'census-data-poverty',
                opacity: 0,
                duration: 3000
            }
        ],
    
        onChapterExit: []
    },

        {
            id: 'explore-map',
            alignment: 'center',
            title: 'Explore the Map',
            description: 'Click on businesses and toggle layers to explore the data yourself.',
            location: {
                center: [-73.945036, 40.734321],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'sbs-points',
                    opacity: 1
                },
                {
                    layer: 'census-data-poverty',
                    opacity: 0.6
                }
            ],
            hidden: false,
            callback: 'enableExploreMode',
            onChapterExit: []
        }


    ]
};