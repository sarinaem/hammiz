import L from "leaflet";
import hammmizIcon from "../../src/assets/Hammmiz.svg";

const customIcon = new L.Icon({
  iconUrl: hammmizIcon,
  iconSize: [40, 40], // سایز آیکون
  iconAnchor: [20, 40], // نقطه‌ی اتصال آیکون به مکان دقیق روی نقشه
  popupAnchor: [0, -40], // مکان پاپ‌آپ
});
