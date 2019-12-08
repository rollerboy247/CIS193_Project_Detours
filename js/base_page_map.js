function initMap(x,y) {
    var options = {
        zoom: 10,
        center: {lat: x, lng: y}
    }
    var map = new
    google.maps.Map(document.getElementById('map'), options);
}

function geocode() {
    var location = "Tokyo, Japan";
    axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
        params: {
            address: location,
            key: "AIzaSyAvXu-IBnE1eVWZNjD0CkPfLkv6ZQd2oag"
        }
    })
    .then(function(response){
        // !!Do not use 'location', will return page location instead of variable
        geocode = response.data.results[0].geometry.location;
        var latitude = geocode.lat;
        var longitude = geocode.lng;
        console.log(geocode);
        initMap(latitude, longitude);
    })
    //any errors
    .catch(function(error){
        console.log(error);
    });
}

geocode();