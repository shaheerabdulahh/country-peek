import { createContext, useReducer, useEffect, useContext } from 'react'

// 1. reducer with ADD_FAVOURITE and REMOVE_FAVOURITE
function favouritesReducer(state, action) {
  switch (action.type) {
    case 'ADD_FAVOURITE':
      return [...state, action.payload]
    case 'REMOVE_FAVOURITE':
      return state.filter(c => c.cca3 !== action.payload)
    default:
      return state
  }
}

// 2. create the context
const FavouritesContext = createContext()

export function FavouritesProvider({ children }) {
  // 3. load initial state from localStorage
  const initialState = JSON.parse(localStorage.getItem('favourites') || '[]')

  // 4. useReducer with reducer and initial state
  const [favourites, dispatch] = useReducer(favouritesReducer, initialState)

  // 5. save favourites to localStorage on every change
  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites))
  }, [favourites])

  // 6. return Provider wrapping children
  return (
    <FavouritesContext.Provider value={{ favourites, dispatch }}>
      {children}
    </FavouritesContext.Provider>
  )
}

// 7. export useFavourites hook
export function useFavourites() {
  return useContext(FavouritesContext)
}
