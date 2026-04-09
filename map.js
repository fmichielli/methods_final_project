'use strict'        // let the browser know we're serious

// debug statement letting us know the file is loaded
console.log('Loaded map.js')

// your mapbox token
mapboxgl.accessToken = 'pk.eyJ1IjoiZm1pY2hpZWxsaSIsImEiOiJjbW43dTZuYmQwNGFmMm9xNW5lbHRseTR5In0.2dn0F7JMPo6G-oSdVe5dNg'

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11',
    center: [-73.93324, 40.80877],
    zoom: 14
});


var blocks_url = "./data/nyc_census_data.geojson"

map.on('load',function(){
    // define a 'source' for your polygons dataset
    map.addSource('blocks_data',{
      'type':'geojson',
      'data': blocks_url,
    });
    // add a new layer with your polygons
    map.addLayer({
      'id':'blocks',
      'type':'fill',
      'source':'blocks_data',
      'paint':{
        'fill-color':'#ffffff',
        'fill-outline-color':'#000000',
        'fill-opacity': 0.5
      }
    })
  });