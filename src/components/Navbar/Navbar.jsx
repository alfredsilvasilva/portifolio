import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-900 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex ju items-center justify-end">
            <div className="flex items-center">
            
              <Link className="text-yellow-500 font-bold text-lg mr-4" href="/">Home</Link>
              <Link className="text-yellow-500 font-bold text-lg mr-4" href='/portifolio'>
                Portfolio
              </Link>

              <Link className="text-yellow-500 font-bold text-lg" href="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
