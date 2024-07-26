import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import LocationTile from "../components/location-Tile";
import DropdownMenu from "../components/Menu/index.jsx";

import "leaflet/dist/leaflet.css";
import "../styles/map.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default function CompanyDetails() {
  const { company_id } = useParams();
  const [companyDetails, setCompanyDetails] = useState([]);
  const [activeLocation, setActiveLocation] = useState(null);

  useEffect(() => {
    const fetchCompanyDetails = async () => {
      try {
        const res = await axios.get(
          `http://127.0.0.1:5000/companies/${company_id}/locations`
        );
        setCompanyDetails(res.data);
        setActiveLocation(res.data[0]); // Set the first location as active initially
      } catch (err) {
        console.log("Error fetching company details: ", err);
      }
    };

    fetchCompanyDetails();
  }, [company_id]);

  const handleLocationChange = (locationId) => {
    const selectedLocation = companyDetails.find(
      (location) => location.location_id === parseInt(locationId)
    );
    setActiveLocation(selectedLocation);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {companyDetails.length ? (
        <>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyDetails.map((location) => (
              <LocationTile key={location.location_id} location={location} />
            ))}
          </div>
          <DropdownMenu
            locations={companyDetails}
            onLocationChange={handleLocationChange}
          />
          <MapContainer
            center={[activeLocation.latitude, activeLocation.longitude]}
            zoom={10}
            className="map-container"
            key={activeLocation.location_id}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {companyDetails.map((location) => (
              <Marker
                key={location.location_id}
                position={[location.latitude, location.longitude]}
              >
                <Popup>
                  <p className="text-xl font-semibold text-gray-800">
                    {location.name}
                  </p>
                  <p className="text-gray-600">{location.address}</p>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
