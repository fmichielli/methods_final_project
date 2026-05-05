var config = {
    style: 'mapbox://styles/fmichielli/cmnquzlk7003k01s73ydzf20n',
    accessToken: 'pk.eyJ1IjoiZm1pY2hpZWxsaSIsImEiOiJjbW43dTZuYmQwNGFmMm9xNW5lbHRseTR5In0.2dn0F7JMPo6G-oSdVe5dNg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Small Businesses of New York City',
    subtitle: "How do Small Businesses Contribute to NYC's Communities?",
    byline: 'By  Frankie Michielli, Aishwarya Warad, and Dajin Wang',
    footer: 'Source: SBS Certified Business List, NYC OpenData. Census Data, ACS.',
    chapters: [
        {
            id: 'chapter-1',
            alignment: 'center',
            hidden: false,
            title: 'Small Businesses',
            description: "Small businesses are a vital part of NYC's economy and community development. The blue dots represent the locations of registered small businesses across the city.",
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
            description: 'Through the Small Business Services certification program, the City certifies, promotes, and fosters the growth of the minority and women-owned businesses. Through the certification program, SBS provides these businesses with mentorship programs, access to contracting opportunities, and networking opportunities.',
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
            title: 'Williamsburg and Greenpoint, Brooklyn, are hubs for women-owned businesses.',
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
            description: "According to New York officials, small businesses are the backbone of the city's economy, and have been critical in the New York City's recovery from the COVID pandemic. Let's investigate the relationship between small businesses and poverty rates across the city. The census data layers show the poverty rates across NYC's neighborhoods, with darker colors representing higher poverty rates.",
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
                    opacity: 1,
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
                    opacity: 1,
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
                opacity: 1,
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
                opacity: 1,
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
                opacity: 1,
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
                opacity: 1,
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
                opacity: 1,
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
        title: 'Project Next Steps:',
        description: 'Interviews with small business owners and community members to understand the impact of small businesses on communities across the city. And, improve visualizations!',
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
                zoom: 11,
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