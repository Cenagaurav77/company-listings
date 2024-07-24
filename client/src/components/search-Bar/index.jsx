import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchBar = ({ setFilteredCompanies }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:5000/companies");
        const companies = res.data;

        const filteredCompanies = companies.filter((company) =>
          company.name.toLowerCase().includes(input.toLowerCase())
        );

        setFilteredCompanies(filteredCompanies);
      } catch (error) {
        console.error("Error fetching company details:", error);
        setFilteredCompanies([]);
      }
    };

    fetchData();
  }, [input, setFilteredCompanies]);

  return (
    <div className="flex flex-col items-center m-auto">
      <div className="p-3">
        <input
          placeholder="Enter company name"
          className="shadow-md rounded-lg p-2 m-4 border border-gray-200 w-80"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
