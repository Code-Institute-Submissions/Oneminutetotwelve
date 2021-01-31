
    let locations=[];

     fetch("https://www.trackcorona.live/api/countries")
          .then(function (res) {
                return res.json();
            })
            .then(function (country) {
                let i = 0;
                let len = country.data.length;
                for (i = 0; i < len; i++){
                  locations.push({"country":country.data[i].location, "lat":country.data[i].latitude, "long":country.data[i].longitude});
                } 
    
                //Init map
        })
            .catch(function (er) {
                console.log('error: ' + er);
            })

 function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: { lat: 0, lng: 0 },
      styles: [
         featureType: "water",
        elementType: "geometry.fill",
        stylers: [{ color: "#b7c6db" }],
      }, ],
  })
 var infowindow = new google.maps.InfoWindow;

    var marker, a;

    for (a = 0; a < locations.length; a++) {  
        marker = new google.maps.Marker({
             position: new google.maps.LatLng(locations[a].lat, locations[a].long),
             map: map
        })

      google.maps.event.addListener(marker, 'click', (function(marker, a) {
             return function() {
                 infowindow.setContent(locations[a].country);
                 infowindow.open(map, marker);
             }
        })(marker, a))
    } 
   
}

