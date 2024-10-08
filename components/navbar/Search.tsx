import React from "react";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div className="px-4 flex items-center bg-[#f5f8ff] rounded-full transition-all">
      <FiSearch className="w-4 h-4 text-gray-400" strokeWidth={2.5} />

      <input
        type="text"
        placeholder="Search"
        className="px-2 py-1.5 w-full text-sm bg-[#f5f8ff] rounded-full focus:outline-none"
      />
    </div>
  );
};

export default Search;
