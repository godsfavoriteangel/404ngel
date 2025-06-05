'use client'
import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'root-mode' | 'angel-mode' | 'void-mode'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'root-mode',
  setTheme: () => {},
})

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>('root-mode')

  const applyThemeClass = (theme: Theme) => {
    const html = document.documentElement
    html.classList.remove('root-mode', 'angel-mode', 'void-mode')
    html.classList.add(theme)
  }

  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null
    const initial = saved || 'root-mode'
    setThemeState(initial)
    applyThemeClass(initial)
  }, [])

  useEffect(() => {
    applyThemeClass(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const setTheme = (theme: Theme) => setThemeState(theme)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)