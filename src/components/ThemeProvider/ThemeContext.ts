import { createContext } from 'react'
import { TColors } from '../../colors'

type ThemeContextType = {
  colors: TColors
  applyColors: (colors: TColors) => void
}

export const ThemeContext = createContext<ThemeContextType | null>(null)
