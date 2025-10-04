let map;
let ikb = {
    center: { lat: 49.267, lng: -123.253 },
    zoom: 18,
    zoomControl: false,
    cameraControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false
  }
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), ikb)
}

initMap();