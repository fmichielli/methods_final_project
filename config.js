var config = {
    style: 'mapbox://styles/fmichielli/cmnquzlk7003k01s73ydzf20n',
    accessToken: 'pk.eyJ1IjoiZm1pY2hpZWxsaSIsImEiOiJjbW43dTZuYmQwNGFmMm9xNW5lbHRseTR5In0.2dn0F7JMPo6G-oSdVe5dNg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Small Businesses of New York City',
    subtitle: "How do Small Businesses Contribute to NYC's Communities?",
    byline: 'By Aishwarya Warad, Dajin Wang, and Frankie Michielli',
    footer: 'Source: SBS Certified Business List, NYC OpenData. Census Data, ACS.',
    chapters: [
        {
            id: 'chapter-1',
            alignment: 'center',
            hidden: false,
            title: 'Small Businesses',
            description: "Small businesses are a vital part of NYC's economy and community development. The blue dots represent the locations of small businesses across the city.",
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
            image: './legend_clean.png',
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
            title: 'Williamsburg and Greenpoint, Brooklyn, are a hub for women-owned businesses.',
            description: '',
            image: './legend_clean.png',
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
            image: './legend_clean.png',
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
        }


    ]
};