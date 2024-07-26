import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
        <Link to={"/"}>
          <div className="ml-5">
            <h1 className="text-red-900 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
              Company Listings
            </h1>
          </div>
        </Link>
      </nav>
    </div>
  );
}
