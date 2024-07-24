import axios from "axios";
import { useEffect, useState } from "react";
import CompanyTile from "../components/company-Tile";
import SearchBar from "../components/search-Bar";

export default function Home() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetchListOfCompanies();
  }, []);

  async function fetchListOfCompanies() {
    try {
      const res = await axios.get("http://127.0.0.1:5000/companies");
      const data = res.data;
      setCompanies(data);
      console.log(data);
    } catch (err) {
      console.log("Error fetching the data: ", err);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <SearchBar />
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company) => (
          <CompanyTile key={company.company_id} company={company} />
        ))}
      </div>
    </div>
  );
}
