import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import L from "leaflet";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import activeLocation from "../../assets/Hammmiz-active.svg";
import deActive from "../../assets/deactive1.svg";
import hammmizIcon from "../../assets/Hammmiz.svg";
import hammmizIcon2 from "../../assets/Hammmiz-2.svg";
import admin from "../../assets/admin.svg";
import search from "../../assets/Search.svg";

const locations = [
  {
    id: 1,
    name: "هم میز ولی‌عصر",
    lat: 35.70176,
    lng: 51.404917,
    iconActive: hammmizIcon2,
    iconInactive: activeLocation,
  },
  {
    id: 2,
    name: "هم میز انقلاب",

    lat: 35.694842,
    lng: 51.416363,
    iconActive: deActive,
    iconInactive: hammmizIcon,
  },
];

function ZoomToLocation({ location }) {
  const map = useMap();

  useEffect(() => {
    if (location) {
      map.setView([location.lat, location.lng], 17, { animate: true });
    }
  }, [location, map]);

  return null;
}

export default function MapView() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const filteredLocations = locations.filter((loc) =>
    loc.name.includes(searchTerm.trim())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setShowResults(true);
  };

  const navigate = useNavigate();
  const [activeId, setActiveId] = useState(1);
  const selectedLocation = locations.find((loc) => loc.id === activeId);

  return (
    <div style={{ height: "100vh" }} className="relative">
      <div
        className="absolute font-normal leading-6 text-base  top-[10px] flex flex-row-reverse gap-6 p-1 rounded-[40px] justify-between items-center bg-white"
        style={{
          zIndex: 1000,
          top: 10,
          left: "50%",
          transform: "translateX(-50%)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          width: "90%",
        }}
      >
        <img src={admin} alt="" />

        <div className="flex items-center flex-row-reverse gap-3">
          <label htmlFor="locationInput" className="sr-only">
            جستجوی همممیز
          </label>
          <input
            value={searchTerm}
            id="locationInput"
            type="text"
            placeholder="همممیز خودت رو انتخاب کن"
            onChange={handleSearchChange}
            onFocus={() => setShowResults(true)}
            className="text-[#525252] leading-6 text-base font-dana text-right font-normal bg-transparent border-none outline-none placeholder:text-[#999] w-full"
          />
          <div className="bg-[#F87A08] rounded-full flex justify-center items-center w-8 h-8 cursor-pointer">
            <img src={search} alt="جستجو" className="w-4 h-4" />
          </div>
        </div>
      </div>
      {showResults && filteredLocations.length > 1 && (
        <ul className="absolute top-[50px] right-[40px] w-[80%] bg-white border mt-1 rounded shadow z-[1000]">
          {filteredLocations.map((loc) => (
            <li
              key={loc.id}
              onClick={() => {
                setActiveId(loc.id);
                setSearchTerm(loc.name);
                setShowResults(false);
              }}
              className="cursor-pointer p-2 hover:bg-orange-100 text-right"
            >
              {loc.name}
            </li>
          ))}
        </ul>
      )}

      {showResults && filteredLocations.length === 0 && (
        <p className="absolute top-[50px] right-[40px] mt-1 text-sm text-gray-500 bg-white p-2 border rounded z-[1000]">
          هممیز پیدا نشد🤷‍♀️{" "}
        </p>
      )}
      <MapContainer
        center={[35.698, 51.41]}
        zoom={20}
        zoomControl={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((loc) => (
          <Marker
            key={loc.id}
            eventHandlers={{
              click: () =>
                setActiveId((prevId) => (prevId === loc.id ? 0 : loc.id)),
            }}
            icon={
              new L.Icon({
                iconUrl:
                  activeId === loc.id ? loc.iconActive : loc.iconInactive,
                iconSize: [63, 60],
                iconAnchor: [31, 60],
                popupAnchor: [0, -50],
              })
            }
            position={[loc.lat, loc.lng]}
          >
            {/* <Popup>
              <div style={{ textAlign: "center", fontSize: "14px" }}>
                {loc.name}
              </div>
            </Popup> */}
          </Marker>
        ))}

        <ZoomToLocation location={selectedLocation} />
      </MapContainer>
      {/* دکمه پایین */}
      <div
        style={{
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          width: "90%",
          textAlign: "center",
        }}
      >
        <button
          onClick={() => navigate("/product")}
          style={{
            color: "#FFFFFF",
            backgroundColor: activeId !== 0 ? "#999999" : "#F87A08",
          }}
          className="rounded-[50px] py-2 px-6 w-[80%] "
        >
          برگزیدن
        </button>
      </div>
    </div>
  );
}
