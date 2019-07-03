var map;
var endpoint = "https://api.data.gov.sg/v1/transport/taxi-availability"


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });
}


// data source
function getDataFromEndpoint() {
    axios.get(endpoint)
        .then(function(response) {
            let results = response.data.features[0].geometry.coordinates;
            console.log(response)
        });
}
