import React from "react";

const DropdownMenu = ({ locations, onLocationChange }) => {
  return (
    <div className="dropdown-container mt-4 max-w-xs mx-auto">
      <select
        onChange={(e) => onLocationChange(e.target.value)}
        className="dropdown-select p-2 border rounded w-full"
      >
        {locations.map((location) => (
          <option key={location.location_id} value={location.location_id}>
            {location.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownMenu;
