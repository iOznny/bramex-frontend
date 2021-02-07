window.addEventListener('load', () => {

    var coordenadas = [18.993006, -98.277910]; 

    var mymap = L.map('mapid').setView(coordenadas, 16);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaW96bm55IiwiYSI6ImNra3Jzb2tzYzB1YTYyd254MW5iczBseG0ifQ.EwaM5ILQjujR_UnXW40gXg', {
        maxZoom: 18,
        attribution: 'Datos del mapa de &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, ' + '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imágenes © <a href="https://www.mapbox.com/">Mapbox</a>', 
        id: 'mapbox/streets-v11'
    }).addTo(mymap);

    var myIcon = L.icon({
        iconUrl: 'assets/img/fruits.png',
        iconSize: [64, 64],
        iconAnchor: [32, 0],
    });

    var marker = L.marker(coordenadas, {icon: myIcon}).addTo(mymap);
    marker.bindPopup("<b>Mi ubicación</b><br><a href='https://goo.gl/maps/Z2298G8mGfM7KVkw6' target='_blank'>Solicita más información</a>").openPopup();

    am4core.ready(function() {
        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        // Create map instance
        var chart = am4core.create("map-catering", am4maps.MapChart);

        // Set map definition
        chart.geodata = am4geodata_worldLow;

        // Set projection
        chart.projection = new am4maps.projections.Miller();

        chart.seriesContainer.draggable = false;
        chart.seriesContainer.resizable = false;
        chart.maxZoomLevel = 1;
        chart.chartContainer.wheelable = false;

        // Create map polygon series
        var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
        
        // Exclude Antartica
        polygonSeries.exclude = ["AQ"];

        // Make map load polygon (like country names) data from GeoJSON
        polygonSeries.useGeodata = true;

        // Configure series
        var polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}";
        polygonTemplate.polygon.fillOpacity = 0.6;

        // Create hover state and set alternative fill color
        var hs = polygonTemplate.states.create("hover");
        hs.properties.fill = chart.colors.getIndex(0);

        // Add image series
        var imageSeries = chart.series.push(new am4maps.MapImageSeries());
        imageSeries.mapImages.template.propertyFields.longitude = "longitude";
        imageSeries.mapImages.template.propertyFields.latitude = "latitude";
        imageSeries.mapImages.template.tooltipText = "{title}";

        var circle = imageSeries.mapImages.template.createChild(am4core.Circle);
        circle.radius = 3;
        circle.propertyFields.fill = "color";

        var circle2 = imageSeries.mapImages.template.createChild(am4core.Circle);
        circle2.radius = 3;
        circle2.propertyFields.fill = "color";


        circle2.events.on("inited", function(event){
        animateBullet(event.target);
        })

        function animateBullet(circle) {
            var animation = circle.animate([{ property: "scale", from: 1, to: 5 }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
            animation.events.on("animationended", function(event){
              animateBullet(event.target.object);
            })
        }

        var colorSet = new am4core.ColorSet();

        imageSeries.data = [ {
            "title": "Sucursal CDMX",
            "latitude": 19.42847,
            "longitude": -99.12766,
            "color":colorSet.next()
        }, {
            "title": "Sucursal Sao Paulo",
            "latitude": -23.5489,
            "longitude": -46.6388,
            "color":colorSet.next()
        }, {
            "title": "Sucursal Dallas",
            "latitude": 32.7942,
            "longitude": -96.7655,
            "color":colorSet.next()
        }, {
            "title": "Sucursal Nueva Delhi",
            "latitude": 28.65195,
            "longitude": 77.23149,
            "color":colorSet.next()
        }];
    });
    
});