
function initMap() {
  const myLatLng1 = { lat: 40.868025961333245, lng: -73.42611817038706 };
  
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: myLatLng1,
  });
  const marker1 = new google.maps.Marker({
    position: myLatLng1,
    map,
    title: "Click Me",
	icon: "images/house.jpg"
  });
  
  const contentString1 = "There's no place like home.";
 
  const infowindow1 = new google.maps.InfoWindow({
      content: contentString1,
    });

  marker1.addListener("click", () => {
    infowindow1.open(map, marker1);
	
  });
  
  const myLatLng2 = { lat: 41.83472555247435, lng: -87.62695529723992 };
  
  const marker2 = new google.maps.Marker({
    position: myLatLng2,
    map,
    title: "Click Me",
	icon: "images/arrow.jpg"
  });
  
  const contentString2 = "Looking forward to the rest of college.";
 
  const infowindow2 = new google.maps.InfoWindow({
      content: contentString2,
    });

  marker2.addListener("click", () => {
    infowindow2.open(map, marker2);
	
  });
  
  const myLatLng3 = { lat: -73.5017041579328, lng: 4.693110236493023 };
   
  const marker3 = new google.maps.Marker({
    position: myLatLng3,
    map,
    title: "Click Me",
	icon: "images/question.jpg"
  });
  
  const contentString3 = "Congratulations, you found the secret marker.";
 
  const infowindow3 = new google.maps.InfoWindow({
      content: contentString3,
    });

  marker3.addListener("click", () => {
    infowindow3.open(map, marker3);
	
  });
}

$(document).ready(function(){
  $('.bxslider').bxSlider();
});

window.addEventListener('load', initMap());





 

