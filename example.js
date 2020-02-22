mapboxgl.accessToken = 'pk.eyJ1IjoibGF1dGFyb2pnYXJjaWExNzciLCJhIjoiY2s2c2d3aXd1MDdlMTNmdW13MGowNGw4aiJ9.D3eG5MP-PLqsCOgcDuITHg';
    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/lautarojgarcia177/ck6wugtda0uby1ipg11vltp2l', // stylesheet location
        center: [-64.188906, -31.437262], // starting position [lng, lat]
        zoom: 18 // starting zoom
    });