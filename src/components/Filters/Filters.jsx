import { useEffect, useState } from "react";

export default function Filters({ psychologists, onFilterChange }) {
  const [sortOption, setSortOption] = useState("A-Z");

  const sortPsychologists = (option, data) => {
    const sorted = [...data];
    switch (option) {
      case "A-Z":
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case "Z-A":
        return sorted.sort((a, b) => b.name.localeCompare(a.name));
      case "PriceLowHigh":
        return sorted.sort((a, b) => a.price - b.price);
      case "PriceHighLow":
        return sorted.sort((a, b) => b.price - a.price);
      default:
        return data;
    }
  };

  useEffect(() => {
    const sorted = sortPsychologists(sortOption, psychologists);
    onFilterChange(sorted);
  }, [sortOption, psychologists]);

  return (
    <div>
      <h1>Filters</h1>
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="A-Z">A to Z</option>
        <option value="Z-A">Z to A</option>
        <option value="PriceLowHigh">Lower price first</option>
        <option value="PriceHighLow">Highest price first</option>
      </select>
    </div>
  );
}
