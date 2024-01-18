import React, { useState } from 'react'
import styled, { css } from 'styled-components/native'

import type {} from 'styled-components/cssprop'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import useColors from './src/components/ThemeProvider/hooks/useColors'

import { ThemeProvider, CircularProgress, Button } from './src'

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

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (value < 100) {
  //       setValue((prevState) => prevState + 10)
  //     }
  //   }, 500)

  //   return () => clearInterval(interval)
  // }, [])

  return (
    <ThemeProvider>
      <Container>
        <Button onPress={() => setValue((prevState) => prevState + 10)}>
          add
        </Button>
        <CircularProgress
        
          color="danger"
          size={100}
          showValueLabel
          formatOptions={{
            options: {
              style: 'currency',
              currency: 'USD',
            },
          }}
          value={value}
          minValue={0}
          maxValue={100}
          // valueLabel={<Text>100%</Text>}
        />
      </Container>
    </ThemeProvider>
  )
}
