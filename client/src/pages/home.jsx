import axios from "axios";
import { useEffect, useState } from "react";
import CompanyTile from "../components/company-Tile";
import SearchBar from "../components/search-Bar";

export default function Home() {
  // State to store the list of companies
  const [companies, setCompanies] = useState([]);
  // State to store the filtered list of companies based on the search
  const [filteredCompanies, setFilteredCompanies] = useState([]);

  useEffect(() => {
    const fetchListOfCompanies = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:5000/companies");
        const data = res.data;
        setCompanies(data);
        setFilteredCompanies(data);
        console.log(data);
      } catch (err) {
        console.log("Error fetching the data: ", err);
      }
    };

    fetchListOfCompanies();
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <SearchBar setFilteredCompanies={setFilteredCompanies} />
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCompanies.map((company) => (
          <CompanyTile key={company.company_id} company={company} />
        ))}
      </div>
    </div>
  );
}
