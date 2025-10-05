let map;

const ikb = {
  center: { lat: 49.265, lng: -123.25 },
  zoom: 17,
  zoomControl: false,
  cameraControl: false,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  fullscreenControl: false,
  mapId: "YOUR_MAP_ID"
};

const StudySpots = [
  {
    name: "Institute for Computing, Information and Cognitive Systems (ICICS)",
    lat: 49.261236365005786,
    lng: -123.24891457799694,
    img: "./Images/ICICS.jpg",
    key: "ICCS"
  },
  {
    name: "Hector J. MacLeod Building (MCLD)",
    lat: 49.261769231405516,
    lng: -123.24959089471172,
    img: "./Images/MCL.jpg",
    key: "MCLD"
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
      this.div.classList.add("spot-marker");

      this.div.innerHTML = `
        <div class="spot-content">
          <img src="${this.spot.img}" alt="${this.spot.name}" class="spot-img">
          <div class="spot-text">
            <b>${this.spot.name}</b>
          </div>
        </div>
      `;

      // Handle clicks
      this.div.addEventListener("click", (e) => {
        e.stopPropagation();
        alert(`${this.spot.name}`);
      });

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
        this.div.style.transform = "translate(-50%, -100%)";
      }
    }

    onRemove() {
      if (this.div) this.div.remove();
    }
  }

  // Add all study spots
  StudySpots.forEach((spot) => {
    const marker = new HTMLMarker(spot);
    marker.setMap(map);
  });
}

initMap();