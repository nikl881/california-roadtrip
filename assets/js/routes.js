
var directionsDisplay = new google.maps.DirectionsRenderer();

var directionsService = new google.maps.DirectionsService();

var map; 

var sanfrancisco = new google.maps.LatLng(37.770280, -122.445810); 
var sandiego = new google.maps.LatLng(32.601436, -117.307416); 

var mapOptions = {
    zoom: 7,
    center: sanfrancisco
    
}; 

map = new google.maps.Map(document.getElementById('map'), mapOptions); 


directionsDisplay.setMap(map) ; 

function calculateRoute(){
    
    var request = { 
        origin: sanfrancisco, 
        destination: sandiego, 
        travelMode: 'DRIVING'
}; 

directionsService.route(request, function(result, status){
    
    if(status == "OK"){
        
        directionsDisplay.setDirections(result); 
    }
}); 

}

document.getElementById('button2').onclick= function(){
    calculateRoute(); 
    } 