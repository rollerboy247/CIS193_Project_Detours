function initMap(x) {
    document.getElementById("map1").innerHTML = "";
    //Set parameters
    var options = {
        zoom: 8,
        center: x
    };
    //Creates Map
    map1 = new
    google.maps.Map(document.getElementById('map1'), options);
    //Creates Marker
    var marker = new google.maps.Marker({
        position: x,
        map: map1
    })
    // Matches style for both icons
    marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
};

function Map2(x) {
    document.getElementById("map2").innerHTML = "";
    var options = {
        zoom: 20,
        center: x
    };
    let map2 = new
    google.maps.Map(document.getElementById('map2'), options);
    var marker = new google.maps.Marker({
        position: x,
        map: map2
    });
    marker.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');
    var marker2 = new google.maps.Marker({
        position: x,
        map: map1
    });
    marker2.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');
};


/* MAIN LOCATION */
function geocode(tempLocation) {
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
};

/* SUB LOCATION */
function geocode2(tempsubLocation){
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
};

// Change Maps
function changeMap(tempObject) {
    // Check for initializeMap takes in length of 1
    if (tempObject.length == 1) {
        tempId = tempObject;
        // defaults first slide to show map
        tempH = "1";
        //console.log(tempId);
        //console.log(tempH);
    } else { // Checks for taking in length of example id="jw4"
        //console.log("went to else");
        if (tempObject.id.length > 1) {
            //console.log("object id greater than 1");
            tempId = tempObject.id;
            if (typeof tempId == "string"){
                //console.log("sliced complete");
                tempId = tempId.slice(-1);
            } else {
                //console.log("no slice needed");
                tempId = tempId;
            }
            var tempH = tempObject.href.slice(-5, -4);
        }
    };
    //console.log(tempH);
    var agentDictionary = data[parseInt(tempId)];
    var mainLocation = agentDictionary["mainLocation"];
    geocode(mainLocation)
    var subLocation = agentDictionary["sublocations"][parseInt(tempH)-1];
    geocode2(subLocation);

}

function initializeMaps() {
    var url_string = window.location;
    var url = new URL(url_string);
    var x = url.searchParams.get("x") || 0;
    changeMap(x)
    geocode(mainLocation);
}
initializeMaps();