import React from "react";

const LocationTile = ({ location }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4 border border-gray-200">
      <p className="text-xl font-semibold text-red-900">{location.name}</p>
      <p className="text-gray-600">{location.address}</p>
      <p className="text-gray-600">Latitude: {location.latitude}</p>
      <p className="text-gray-600">Longitude: {location.longitude}</p>
    </div>
  );
};

export default LocationTile;
