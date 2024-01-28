import { FC, ReactNode, useState } from 'react'
import Colors, { TColors } from '../../colors'
import { ThemeContext } from './ThemeContext'
import { Container } from './ThemeProvider.styled'

type Props = {
  children?: ReactNode
}

const NextUIProvider: FC<Props> = ({ children }) => {
  const [colors, setColors] = useState(Colors.dark)

  const applyColors = (colorTheme: TColors) => {
    setColors(colorTheme)
  }

  return (
    <ThemeContext.Provider value={{ applyColors, colors }}>
      <Container>{children}</Container>
    </ThemeContext.Provider>
  )
}

export { ThemeContext, NextUIProvider }
