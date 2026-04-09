var config = {
    style: 'mapbox://styles/fmichielli/cmnquzlk7003k01s73ydzf20n',
    accessToken: 'pk.eyJ1IjoiZm1pY2hpZWxsaSIsImEiOiJjbW43dTZuYmQwNGFmMm9xNW5lbHRseTR5In0.2dn0F7JMPo6G-oSdVe5dNg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Small Businesses of New York City',
    subtitle: "How do small businesses contribute to NYC's communities",
    byline: 'By a Aishwarya, Dajin, and Frankie',
    footer: 'Source: SBS Certified Business List, NYC OpenData. Census Data, ACS.',
    chapters: [
        {
            id: 'chapter-1',
            alignment: 'left',
            hidden: false,
            title: 'Small Businesses',
            description: "Small businesses are a vital part of NYC's economy and community development",
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
                 layer: 'sbs-points',
                 opacity: 1,
                 duration: 5000
                 },
                 {
                    layer: 'census data',
                    opacity: 0,
                    duration: 5000
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
            title: 'Women. Minority-Owned, and Emerging Business Enterprises',
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
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};