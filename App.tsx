import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components/native'
import type {} from 'styled-components/cssprop'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import useColors from './src/components/ThemeProvider/hooks/useColors'

import {
  ThemeProvider,
  // AvatarGroup,
  // Avatar,
  // Badge,
  // ButtonGroup,
  Button,
  // Chip,
  // Code,
  // Divider,
  // Progress,
  // RadioGroup,
  // Radio,
  Slider,
  // Switch,
  // User,
} from './src'

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

  useEffect(() => {
    console.log(value)
  }, [value])

  return (
    <ThemeProvider>
      <Container>
        <Slider
          label="Slider"
          maxValue={10}
          onValueChange={(newValue: number) => setValue(newValue)}
          value={5}
        />
        <Button onPressOut={() => setValue(10)}>set 10</Button>
      </Container>
    </ThemeProvider>
  )
}
