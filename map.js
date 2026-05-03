'use strict'        // let the browser know we're serious

// debug statement letting us know the file is loaded
console.log('Loaded map.js')

// your mapbox token
mapboxgl.accessToken = 'pk.eyJ1IjoiZm1pY2hpZWxsaSIsImEiOiJjbW43dTZuYmQwNGFmMm9xNW5lbHRseTR5In0.2dn0F7JMPo6G-oSdVe5dNg'

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11',
    center: [-73.93324, 40.80877],
    zoom: 14,
    interactive: true
});

// Add built-in zoom/rotation controls so we can confirm the map is interactive
map.addControl(new mapboxgl.NavigationControl(), 'top-right');

// Force the map container itself to accept mouse/touch events
var mapContainer = document.getElementById('map');
mapContainer.style.pointerEvents = 'auto';


var blocks_url = "./data/nyc_census_data.geojson"
var sbs_url = "./data/SBS_data.geojson"

map.on('load',function(){
    enableExploreMode();
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
    map.addSource('SBS_data',{
        'type':'geojson',
        'data': sbs_url,
        cluster: true,
        clusterRadius: 50
      });
      // add a new layer with your points
      map.addLayer({
        'id':'business',
        'type':'circle',
        'source':'SBS_data',
        'paint':{
          'circle-color': '#349f27',
          'circle-opacity':0.7,
          'circle-radius':4
        },
      })
      // Change cursor on hover
      map.on('mouseenter', 'business', function () {
        map.getCanvas().style.cursor = 'pointer';
      });

      map.on('mouseleave', 'business', function () {
        map.getCanvas().style.cursor = '';
      });

      // Click popup
      map.on('click', 'business', function (e) {
        var props = e.features[0].properties;

        var popupHTML = `
          <strong>${props.business_name || props.name || 'Business'}</strong><br>
          ${props.address ? `Address: ${props.address}<br>` : ''}
          ${props.industry ? `Industry: ${props.industry}<br>` : ''}
          ${props.business_type ? `Business Type: ${props.business_type}<br>` : ''}
        `;

        new mapboxgl.Popup()
          .setLngLat(e.lngLat)
          .setHTML(popupHTML)
          .addTo(map);
      });
  });

  function enableExploreMode() {
    map.scrollZoom.enable();
    map.boxZoom.enable();
    map.dragPan.enable();
    map.dragRotate.enable();
    map.keyboard.enable();
    map.doubleClickZoom.enable();
    map.touchZoomRotate.enable();
    map.resize();
    console.log('Explore mode enabled');
    document.getElementById('back-to-story').style.display = 'block';
  }

  function disableExploreMode() {
    map.scrollZoom.disable();
    map.boxZoom.disable();
    map.dragPan.disable();
    map.dragRotate.disable();
    map.keyboard.disable();
    map.doubleClickZoom.disable();
    map.touchZoomRotate.disable();

    document.getElementById('story').style.pointerEvents = 'auto';
    document.getElementById('back-to-story').style.display = 'none';
}

function goBackToStory() {
    disableExploreMode();
    document.getElementById('chapter-9').scrollIntoView({ behavior: 'smooth' });
}