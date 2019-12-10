function initMap(x) {
    var options = {
        zoom: 10,
        center: x
    };
    var map1 = new
    google.maps.Map(document.getElementById('map1'), options);
};

function Map2(x) {
    var options = {
        zoom: 20,
        center: x
    };
    var map2 = new
    google.maps.Map(document.getElementById('map2'), options);
};

function geocode(tempLocation, tempsubLocation) {
    // MAIN LOCATION
    var location = tempLocation;
    axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
        params: {
            address: location,
            key: "AIzaSyDwh3ogxrTPN_PijLMF3Vqjrh9yUzyVABs"
        }
    })
    .then(function(response){
        // !!Do not use 'location', will return page location instead of variable
        geocoded = response.data.results[0].geometry.location;
        //console.log(geocoded);
        initMap(geocoded);
    })
    .catch(function(error){
        console.log(error);
    })
    // SUB LOCATION
    var location2 = tempsubLocation;
    axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
        params: {
            address: location2,
            key: "AIzaSyDwh3ogxrTPN_PijLMF3Vqjrh9yUzyVABs"
        }
    })
    .then(function(response) {
        geocoded = response.data.results[0].geometry.location;
        //console.log(geocoded);
        Map2(geocoded);
    })
}

// Change Maps
function changeMap(tempId) {
    // clear maps
    if (typeof tempId == "string"){
        tempId = parseInt(tempId.slice(-1));
    } else {
        tempId = tempId;
    }
    document.getElementById('map1').innerHTML = "'";
    document.getElementById('map2').innerHTML = "";
    var agentDictionary = data[tempId];
    var mainLocation = agentDictionary["mainLocation"];
    var subLocation = document.getElementsByTagName('h2')[0].innerText;
    geocode(mainLocation, subLocation);
};

function initializeMaps() {
    var url_string = window.location;
    var url = new URL(url_string);
    var x = url.searchParams.get("x") || 0;
    changeMap(x)
}
initializeMaps();