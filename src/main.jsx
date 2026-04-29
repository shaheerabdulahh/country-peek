import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/index.css";
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext'   // import ThemeProvider
import { FavouritesProvider } from './context/FavouritesContext' // import FavouritesProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* ThemeProvider must be the outermost wrapper */}
    <ThemeProvider>
      <FavouritesProvider>
        <App />
      </FavouritesProvider>
    </ThemeProvider>
  </StrictMode>,
)
