import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LocationTile from "../components/location-Tile";

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
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {companyDetails.map((location) => (
            <LocationTile key={location.location_id} location={location} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
