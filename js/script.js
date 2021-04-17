

function initMap() {
  const myLatLng = { lat: -25.363, lng: 131.044 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatLng,
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Home Sweet Home!",
  });
}





window.addEventListener("load", initMap);



$(document).ready(function(){
  $('.bxslider').bxSlider();
});

 

