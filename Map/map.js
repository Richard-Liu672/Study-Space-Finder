let map;
let ikb = {
    center: { lat: 49.267, lng: -123.253 },
    zoom: 19,
  }
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), ikb);
}

initMap();