import { useEffect } from "react";
import { useState } from "react";

function SearchBox({ onSearch }) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(search);
    }, 500); // Debounce for 500ms

    return () => clearTimeout(timer);
  }, [search, onSearch]);

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
      }}
      className="border border-gray-300 rounded-md p-2 mb-4 w-full"
    >
      Search
    </input>
  );
}

export default SearchBox;
