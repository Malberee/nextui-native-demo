import { FC, ReactNode, useState } from 'react'
import Colors, { TColors } from '../../colors'
import { ThemeContext } from './ThemeContext'

type Props = {
  children?: ReactNode
}

const ThemeProvider: FC<Props> = ({ children }) => {
  const [colors, setColors] = useState(Colors.light)

  const applyColors = (colorTheme: TColors) => {
    setColors(colorTheme)
  }

  return (
    <ThemeContext.Provider value={{ applyColors, colors }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }
