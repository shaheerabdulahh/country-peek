import { Link } from "react-router-dom";

function CountryCard({ country }) {
  // 1. destructure name, flags, population, region, capital, cca3 from country
  const { name, flags, population, region, capital, cca3 } = country;

  return (
    // 2. wrap in a Link to /country/{cca3}, className="card"
    <Link to={`/country/${cca3}`} className="card">
      {/* 3. flag image */}
      <img
        src={flags.svg}
        alt={`${name.common} flag`}
        className="card__flag"
      />

      {/* 4. card body */}
      <div className="card__body">
        <h3 className="card__name">{name.common}</h3>
        <p>Population: {population.toLocaleString()}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital?.[0] ?? "N/A"}</p>
      </div>
    </Link>
  );
}

export default CountryCard;
