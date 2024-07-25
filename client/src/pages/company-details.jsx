import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import LocationTile from "../components/location-Tile";

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
  const [companyDetails, setCompanyDetails] = useState(null);

  useEffect(() => {
    const fetchCompanyDetails = async () => {
      try {
        const res = await axios.get(
          `http://127.0.0.1:5000/companies/${company_id}/locations`
        );
        setCompanyDetails(res.data);
        console.log(res.data);
      } catch (err) {
        console.log("Error fetching company details: ", err);
      }
    };

    fetchCompanyDetails();
  }, [company_id]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {companyDetails ? (
        <>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyDetails.map((location) => (
              <LocationTile key={location.location_id} location={location} />
            ))}
          </div>
          <MapContainer
            center={[companyDetails[0].latitude, companyDetails[0].longitude]}
            zoom={10}
            className="map-container"
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
