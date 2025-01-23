import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import React, { useState } from "react";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearchBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="search-container">
      {/* Search Icon */}
      <Button
        variant={"ghost"}
        size={"icon"}
        className="rounded-full search-icon"
        onClick={toggleSearchBar}
      >
        <Search />
      </Button>

      {/* Search Bar Popup */}
      {isOpen && (
        <div className="search-bar-popup">
          <input type="text" placeholder="Search..." />
          <button onClick={toggleSearchBar}>Close</button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
