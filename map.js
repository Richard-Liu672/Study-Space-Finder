let map;

const ikb = {
  center: { lat: 49.265, lng: -123.25 },
  zoom: 16,
  minZoom: 15,
  maxZoom: 20,
  zoomControl: false,
  cameraControl: false,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  fullscreenControl: false,
  mapId: "YOUR_MAP_ID",
  styles: [
    {
      featureType: "poi",
      stylers: [{ visibility: "off" }]
    }
  ],
};

const StudySpots = [{
    name: "Institute for Computing, Information and Cognitive Systems (ICICS)",
    lat: 49.261236365005786,
    lng: -123.24891457799694,
    img: "Images/ICICS.jpg",
    key: "ICCS"
  },
  {
    name: "Hector J. MacLeod Building (MCLD)",
    lat: 49.261769231405516,
    lng: -123.24959089471172,
    img: "Images/MCLD.jpg",
    key: "Hector J. MacLeod Building (MCLD)"
  },
  {
    name: "Biological Sciences Building (BIOS)",
    lat: 49.264600975121866, 
    lng: -123.25105318852933,
    img: "Images/BIOS.jpg",
    key: "Biological Sciences Building (BIOS)"

  },
  {
    name: "Chemistry Building (CHEM)",
    lat: 49.265562774704335, 
    lng: -123.2524878570304,
    img: "Images/CHEM.jpg",
    key: "Chemistry Building (CHEM)"
  }
];

async function initMap() {
  const { Map, OverlayView } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), ikb);

  // Custom HTML overlay
  class HTMLMarker extends OverlayView {
    constructor(spot) {
      super();
      this.spot = spot;
      this.div = null;
    }

    onAdd() {
      this.div = document.createElement("div");
      this.div.classList.add("spotMarker");

      this.div.innerHTML = `
        <div class = "spotMarker">
          <div class = "spotImageContainer">
            <img class = "spotImage" src = ${this.spot.img}>
          </div>
          <p class = "spotText">${this.spot.name}</p>
        </div>
      `;
      this.getPanes().overlayMouseTarget.appendChild(this.div);
    }

    draw() {
      const projection = this.getProjection();
      const pos = projection.fromLatLngToDivPixel(
        new google.maps.LatLng(this.spot.lat, this.spot.lng)
      );
      if (pos && this.div) {
        this.div.style.left = pos.x + "px";
        this.div.style.top = pos.y + "px";
        this.div.style.position = "absolute";

        this.div.style.transform = `translate(-50%, -100%) scale(${scale})`;
        this.div.style.transformOrigin = "bottom center";
      }
    }

    onRemove() {
      if (this.div) this.div.remove();
    }
  }
  const baseZoom = 16;
  const currentZoom = map.getZoom();
  const scale = Math.pow(2, currentZoom - baseZoom);
  // Add all study spots
  StudySpots.forEach((spot) => {
    const marker = new HTMLMarker(spot);
    marker.setMap(map);
  });
}

initMap();