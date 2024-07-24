import React from "react";

const LocationTile = ({ location }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4 border border-gray-200">
      <p className="text-xl font-semibold text-gray-800">{location.name}</p>
      <p className="text-gray-600">{location.address}</p>
    </div>
  );
};

export default LocationTile;
