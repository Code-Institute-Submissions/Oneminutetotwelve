// This script append information from trackcorona api and world bank api to a google map function
// Set Arrays to append data from Apis below    
var pushstep1 = [];
var pushstep2 = [];
var pushstep3 = [];
var locations = [];
var countries, pop;
// Get input on country coordinates from track corona api plus population living in a country from world bank api
fetch("https://www.trackcorona.live/api/countries").then(function(
        response) {
        return response.json();
    }).then(function(dataCountry) {
        countries = dataCountry;
        return fetch(
            'https://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL/?format=json&date=2010:2020&per_page=5000'
            );
    }) //Get input on  population living in a country from world bank api
    .then(function(response) {
        return response.json();
    }).then(function(dataPop) {
        pop = dataPop;
        var length = pop[1].length;
        var len = countries.data.length;
        var i = 0;
        var e = 0;
        for (i = 0; i < length; i++) {
            for (e = 0; e < len; e++) {
                if (pop[1][i].country.value === countries.data[e]
                    .location) {
                    if (pop[1][i].date === "2018") {
                        pushstep1.push({
                            "country": countries.data[e]
                                .location,
                            "lat": countries.data[e]
                                .latitude,
                            "long": countries.data[e]
                                .longitude,
                            "pop": (pop[1][i].value /
                                1000000).toFixed(2)
                        });
                    } // push data from world bank and track corona to pushstep1 array
                }
            }
        }
    }).then(function(dataCountry) {
        countries = dataCountry;
        return fetch(
            'https://api.worldbank.org/v2/en/country/all/indicator/SP.DYN.LE00.IN?format=json&per_page=3000&source=2&date=2010:2020'
            );
    }) //Get input on  life expetence in a country from world bank api
    .then(function(response) {
        return response.json();
    }).then(function(dataAge) {
        age = dataAge;
        var length = age[1].length;
        var lngth = pushstep1.length;
        var i = 0;
        var c = 0;
        for (i = 0; i < length; i++) {
            for (c = 0; c < lngth; c++) {
                if (age[1][i].country.value === pushstep1[c]
                    .country) {
                    if (age[1][i].date === "2018") {
                        pushstep2.push({
                            "country": pushstep1[c]
                                .country,
                            "lat": pushstep1[c].lat,
                            "long": pushstep1[c].long,
                            "pop": pushstep1[c].pop,
                            "lifeexp": age[1][i].value
                        });
                    } // push data from world bank and track corona to pushstep2 array
                }
            }
        }
    }).then(function(dataPov) {
        poverty = dataPov;
        return fetch(
            'https://api.worldbank.org/v2/en/country/all/indicator/SI.POV.DDAY?format=json&per_page=3000&source=2&date=2010:2020'
            );
    }) //Get input on  poverty in a country from world bank api
    .then(function(response) {
        return response.json();
    }).then(function(datapoverty) {
        povert = datapoverty;
        var length = povert[1].length;
        var lngth2 = pushstep2.length;
        var i = 0;
        var c = 0;
        for (i = 0; i < length; i++) {
            for (c = 0; c < lngth2; c++) {
                if (povert[1][i].country.value === pushstep2[c]
                    .country) {
                    if (povert[1][i].date === "2018") {
                        pushstep3.push({
                            "country": pushstep1[c]
                                .country,
                            "lat": pushstep1[c].lat,
                            "long": pushstep1[c].long,
                            "pop": pushstep1[c].pop,
                            "lifeexp": age[1][i].value,
                            "poverty": povert[1][i].value
                        });
                    } // push data from world bank and track corona to pushstep3 array
                }
            }
        }
    }).then(function(dataCO2) {
        dCO2 = dataCO2;
        return fetch(
            'https://api.worldbank.org/v2/en/country/all/indicator/EN.ATM.CO2E.KT?format=json&per_page=20000&source=2'
            );
    }) //Get input on  carbonemission in a country from world bank api
    .then(function(response) {
        return response.json();
    }).then(function(dataco2) {
        CO2 = dataco2;
        var length = CO2[1].length;
        var lngth3 = pushstep3.length;
        var i = 0;
        var c = 0;
        for (i = 0; i < length; i++) {
            for (c = 0; c < lngth3; c++) {
                if (CO2[1][i].country.value === pushstep3[c]
                    .country) {
                    if (CO2[1][i].date === "2016") {
                        locations.push({
                            "country": pushstep3[c]
                                .country,
                            "lat": pushstep3[c].lat,
                            "long": pushstep3[c].long,
                            "pop": pushstep3[c].pop,
                            "lifeexp": pushstep3[c]
                                .lifeexp,
                            "poverty": pushstep3[c]
                                .poverty,
                            "CO2": CO2[1][i].value
                        });
                    } // push data from world bank and track corona to locations array
                }
            }
        }
    }) //init googlemap plus style the map functions
    .then(function initMap() {
        var map = new google.maps.Map(document.getElementById(
            "map"), {
            zoom: 2,
            minZoom: 2,
            center: {
                lat: 20,
                lng: 0
            },
            styles: [{
                featureType: "all",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#b6af95"
                }],
            }, {
                featureType: "administrative.locality",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#b6af95"
                }],
            }, {
                featureType: "water",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#2a4966"
                }],
            }, {
                featureType: "administrative.land_parcel",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#a8aaa8"
                }]
            }, {
                featureType: "landscape.natural.landcover",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#bebdb3"
                }]
            }, {
                featureType: "administrative.land_parcel",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#a8aaa8"
                }]
            }, {
                featureType: "landscape.natural.terrain",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#b6ad8d"
                }]
            }, {
                featureType: "landscape.man_made",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#575149"
                }]
            }, {
                featureType: "poi.park",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#bacf7a"
                }]
            }, {
                featureType: "road",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#562b07"
                }]
            }, {
                featureType: "transit",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#d98910"
                }]
            }, ]
        }); // set marker on googlemap plus init infowindow
        var infowindow = new google.maps.InfoWindow();
        var marker, a;
        var image = {
            url: "assets/img/map-pin-solid.svg",
            scaledSize: new google.maps.Size(27, 27),
        };
        for (a = 0; a < locations.length; a++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(
                    locations[a].lat, locations[a]
                    .long),
                map: map,
                icon: image,
            });
            google.maps.event.addListener(marker, 'click', (
                function(marker, a) {
                    return function() {
                        infowindow.setContent(
                            '<div class="map-info-window">' +
                            '<h1>' + locations[a]
                            .country + '<h1>' +
                            '<p>' +
                            'Population: ' +
                            locations[a].pop +
                            ' million ' + '</p>' +
                            '<p>' +
                            'Life Expectancy: ' +
                            locations[a].lifeexp +
                            '<p>' +
                            'Living on under 1.9$/day: ' +
                            locations[a].poverty +
                            ' %' + '</p>' +
                            '<p>' +
                            ' Annual CO2-emission: ' +
                            locations[a].CO2 +
                            ' Kilo tonnes ' +
                            '</div>');
                        infowindow.open(map, marker);
                    };
                })(marker, a));
        }
    }).catch(function(error) {
        // if there's an error, log it
        alert(error);
    });