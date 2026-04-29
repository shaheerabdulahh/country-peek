function FilterBar({ region, onRegionChange, sortBy, onSortChange }) {
  return (
    // 1. div.filter-bar
    <div className="filter-bar">
      
      {/* 2. region select */}
      <select 
        value={region} 
        onChange={(e) => onRegionChange(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>

      {/* 3. sort select */}
      <select 
        value={sortBy} 
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="">Default</option>
        <option value="name">Name (A–Z)</option>
        <option value="population">Population (High–Low)</option>
      </select>
    </div>
  )
}

export default FilterBar
