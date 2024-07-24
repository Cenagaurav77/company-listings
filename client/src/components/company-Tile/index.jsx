import React from "react";
import { Link } from "react-router-dom";

const CompanyTile = ({ company }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4 border border-gray-200">
      <Link to={`/company-details/${company.company_id}`}>
        <button className="text-xl font-semibold text-gray-800">
          {company.name}
        </button>
      </Link>
      <p className="text-gray-600">{company.address}</p>
    </div>
  );
};

export default CompanyTile;


// import React from "react";
// import { Link } from "react-router-dom";

// const CompanyTile = ({ company }) => {
//   return (
//     <div className="bg-white shadow-md rounded-lg p-6 m-4 border border-gray-200">
//       <Link to={"/company-details"}>
//         <button className="text-xl font-semibold text-gray-800">
//           {company.name}
//         </button>
//       </Link>
//       <p className="text-gray-600">{company.address}</p>
//     </div>
//   );
// };

// export default CompanyTile;
