import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import CountryPage from './pages/CountryPage'
import Favourites from './pages/Favourites' // import Favourites

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Update the route — rename :name to :code */}
          {/* Replace the placeholder div with <CountryPage /> */}
          <Route path="/country/:code" element={<CountryPage />} />
          {/* replaced placeholder with actual Favourites component */}
          <Route path="/favourites" element={<Favourites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
