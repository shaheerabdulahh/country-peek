import { createContext, useState, useContext } from 'react'

// 1. create the context with createContext()
const ThemeContext = createContext()

// 2. export it so components can import it
export function ThemeProvider({ children }) {
  // 3. declare theme state — start with 'light'
  const [theme, setTheme] = useState('light')

  function toggleTheme() {
    // 4. toggle between 'light' and 'dark'
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)

    // 5. update document.body.setAttribute('data-theme', ...)
    if (newTheme === 'light') {
      document.body.removeAttribute('data-theme')
    } else {
      document.body.setAttribute('data-theme', newTheme)
    }
  }

  // 6. return the context Provider wrapping {children}
  //    pass { theme, toggleTheme } as the value prop
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// 7. export a useTheme custom hook that calls useContext
//    so components don't need to import the context directly
export function useTheme() {
  return useContext(ThemeContext)
}
