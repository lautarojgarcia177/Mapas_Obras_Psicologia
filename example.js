mapboxgl.accessToken = 'pk.eyJ1IjoibGF1dGFyb2pnYXJjaWExNzciLCJhIjoiY2s2c2d3aXd1MDdlMTNmdW13MGowNGw4aiJ9.D3eG5MP-PLqsCOgcDuITHg';

if( !mapboxgl.supported()) {
    alert('Su navegador web no puede mostrar el contenido del mapa');
} else {
    var map;
  start(map);
}

function start(mapa) {
    mapa = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/lautarojgarcia177/ck6wugtda0uby1ipg11vltp2l', // stylesheet location
        center: [-64.188906, -31.437262], // starting position [lng, lat]
        zoom: 18 // starting zoom
    });  

    var popupFacultadPsicologia = new mapboxgl.Popup()
    .setHTML('<h3>Facultad de psicologia</h3><p>Esta es la facu que tiene mas estudiantes de toda la UNC</p>');

    var markerFacultadPsicologia = new mapboxgl.Marker()
    .setLngLat([-64.188906, -31.437262])
    .setPopup(popupFacultadPsicologia)
    .addTo(mapa);

    var popupAmpliacionFacultadPsicologiaSectorA = new mapboxgl.Popup()
    .setHTML('<h3>Ampliacion Facultad Psicologia Sector A</h3>');

    var markerAmpliacionFacultadPsicologiaSectorA = new mapboxgl.Marker()
    .setLngLat([-70, -32])
    .setPopup(popupAmpliacionFacultadPsicologiaSectorA)
    .addTo(mapa);
}
