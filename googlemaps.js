let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  map = new Map(document.getElementById("map"), {
    center: { lat: 45.5593046, lng: -73.8766826, },
    zoom: 8,
  });
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Montreal",
  });
}

initMap();