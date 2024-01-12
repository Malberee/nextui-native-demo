import React, { useState } from 'react'
import styled, { css } from 'styled-components/native'

import type {} from 'styled-components/cssprop'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import useColors from './src/components/ThemeProvider/hooks/useColors'

import { ThemeProvider, CircularProgress } from './src'
import { Text } from 'react-native'

const Container = styled(GestureHandlerRootView)(() => {
  const { colors } = useColors()
  return css`
    flex: 1;
    background-color: ${colors.background};
    align-items: center;
    justify-content: center;
    padding: 0 8px;
  `
})

export default function App() {
  const [value, setValue] = useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <ThemeProvider>
      <Container>
        <CircularProgress
          size={100}
          showValueLabel
          value={value}
          // valueLabel={<Text>100%</Text>}
        />
      </Container>
    </ThemeProvider>
  )
}
