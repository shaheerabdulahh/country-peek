import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/index.css";
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext'  // import ThemeProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* ThemeProvider must be the outermost wrapper */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
