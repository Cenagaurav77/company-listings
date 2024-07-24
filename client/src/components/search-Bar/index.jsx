import React from "react";
import { useState } from "react";
import axios from "axios";

const SearchBar = () => {
  const [input, setInput] = useState("");

  async function fetchData() {
    const res = await axios.get("http://127.0.0.1:5000/companies");
    const data = res.data;
  }

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
