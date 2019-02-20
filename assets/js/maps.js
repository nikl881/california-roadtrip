var map;

$(document).ready(function() {
  var directionsService = new google.maps.DirectionsService(); 
  var directionsDisplay = new google.maps.DirectionsRenderer(); 
  
var map;

function initMap() { 
    var la = new google.maps.LatLng(34.070938, -118.393768); 
    var mapOptions = {
    zoom: 7,
    center: la,
    styles:    
    [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
]

}; 

  var map;
  
  map = new google.maps.Map(document.getElementById("map"), mapOptions); 
  directionsDisplay.setMap(map); 
  } 
  
  function calcRoute(start, end) { 
    var request = {
      origin: start, 
      destination: end, 
      travelMode: "DRIVING"
    }; 
    
    directionsService.route(request, function(result, status) {
    if (status == "OK") {
      directionsDisplay.setDirections(result); 
    }
    });
    }
    
    
    initMap();
    
    $("#button-a").on("click", () => {
      console.log("clicked...");
      
      calcRoute("santa barbara, ca", "san diego, ca");
      
    }); 
      
     $("#button-a").on("click", () => {
      console.log("clicked...");
      
      calcRoute("san diego, ca", "los angeles, ca");
      
      
    }); 
    
     initMap();
    
    $("#button-b").on("click", () => {
      console.log("clicked...");
      
      calcRoute("los angeles, ca", "san diego, ca");
      
    }); 
      
        $("#button-b").on("click", () => {
      console.log("clicked...");
      
      calcRoute("san diego, ca", "los angeles, ca");
    
    var map;
     initMap();
    
    $("#button-c").on("click", () => {
      console.log("clicked...");
      
      calcRoute("los angeles, ca", "san diego, ca");
      
    }); 
      
      $("#button-c").on("click", () => {
      console.log("clicked...");
      
      calcRoute("beverly hills, ca", "lake forest, ca");  
      
    }); 
    
    });    
}); 