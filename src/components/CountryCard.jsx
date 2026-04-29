import { Link } from 'react-router-dom'
import { useFavourites } from '../context/FavouritesContext' // 1. import useFavourites

function CountryCard({ country }) {
  // existing destructuring
  const { name, flags, population, region, capital, cca3 } = country

  // 2. destructure favourites and dispatch
  const { favourites, dispatch } = useFavourites()

  // 3. check if this country is already saved
  const isSaved = favourites.some(f => f.cca3 === cca3)

  return (
    <Link to={`/country/${cca3}`} className="card">
      <img
        src={flags.svg}
        alt={`Flag of ${name.common}`}   // meaningful alt text
        className="card__flag"
      />
      <div className="card__body">
        <h3 className="card__name">{name.common}</h3>
        <p>Population: {population.toLocaleString()}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital?.[0] ?? 'N/A'}</p>

        {/* 4. favourites button with accessibility attributes */}
        <button
          className={`fav-btn ${isSaved ? 'fav-btn--saved' : ''}`}
          aria-label={
            isSaved
              ? `Remove ${name.common} from favourites`
              : `Save ${name.common} to favourites`
          }
          aria-pressed={isSaved}
          onClick={(e) => {
            e.stopPropagation()
            if (isSaved) {
              dispatch({ type: 'REMOVE_FAVOURITE', payload: cca3 })
            } else {
              dispatch({ type: 'ADD_FAVOURITE', payload: country })
            }
          }}
        >
          {isSaved ? '♥ Saved' : '♡ Save'}
        </button>
      </div>
    </Link>
  )
}

export default CountryCard
