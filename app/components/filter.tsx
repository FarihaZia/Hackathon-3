import { useState } from "react";

interface FilterProps {
  onFilter: (minPrice: number, maxPrice: number) => void;
  onReset: () => void; // New prop for reset functionality
}

const Filter: React.FC<FilterProps> = ({ onFilter, onReset }) => {
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");

  const handleFilter = () => {
    if (minPrice !== "" && maxPrice !== "" && minPrice <= maxPrice) {
      onFilter(Number(minPrice), Number(maxPrice));
    } else {
      alert("Please enter valid price ranges");
    }
  };

  const handleReset = () => {
    setMinPrice("");
    setMaxPrice("");
    onReset(); // Trigger the reset logic in the parent component
  };

  return (
    <div className="bg-white p-4 rounded shadow-md mb-6">
      <h3 className="text-lg font-medium mb-4">Filter by Price</h3>
      <div className="flex items-center gap-4">
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value === "" ? "" : Number(e.target.value))}
          placeholder="Min Price"
          className="border rounded px-2 py-1 w-1/2"
        />
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value === "" ? "" : Number(e.target.value))}
          placeholder="Max Price"
          className="border rounded px-2 py-1 w-1/2"
        />
        <button
          onClick={handleFilter}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Apply
        </button>
        <button
          onClick={handleReset}
          className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Filter;
