import L from "leaflet";
import hammmizIcon from "../../src/assets/Hammmiz.svg";

const customIcon = new L.Icon({
  iconUrl: hammmizIcon,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});
