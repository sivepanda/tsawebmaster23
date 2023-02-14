mapboxgl.accessToken = 'pk.eyJ1Ijoic2Zoc3RzYSIsImEiOiJja204M2EzcnoxNDM3Mm9vZm0wbnJiZjQ5In0.XtaJyWtvvliwdrKaEBDhLg';
var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/mapbox/streets-v11',
//47.619274,-122.3484143
center: [-122.3484143, 47.619274], // starting position
zoom: 9 // starting zoom
});
 
// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());