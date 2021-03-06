mapboxgl.accessToken = 'pk.eyJ1IjoibGF1dGFyb2pnYXJjaWExNzciLCJhIjoiY2s2c2d3aXd1MDdlMTNmdW13MGowNGw4aiJ9.D3eG5MP-PLqsCOgcDuITHg';
    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/lautarojgarcia177/ck6wugtda0uby1ipg11vltp2l', // stylesheet location
        center: [-64.188906, -31.437262], // starting position [lng, lat]
        zoom: 18 // starting zoom
    });

//var marker = new mapboxgl.Marker({'color': '#008000'}).setLngLat([-64.188906, -31.437262]).addTo(map);

map.on('load', function() {
    map.on('click', function(e) {
        var features = map.queryRenderedFeatures(e.point, {
            layers: ['psicologia-puntos']
        });
        
        if (!features.length) {
            return;
        }

        var feature = features[0];

        var popupHTML = '<h3>' + feature.properties.title + '</h3>' + '<p>' + feature.properties.description + '</p>' + '<img src="' + feature.properties.picture + '" width="100px" height="100px" />';
        var popup = new mapboxgl.Popup({ offset: [0, -15] })
            .setLngLat(feature.geometry.coordinates)
            .setHTML(popupHTML)
            .addTo(map);
    });
});