import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import useColors from './src/components/ThemeProvider/hooks/useColors'
import styled, { css } from 'styled-components/native'

import {
  ThemeProvider,
  AvatarGroup,
  Avatar,
  Badge,
  ButtonGroup,
  Button,
  Chip,
  Code,
  Divider,
  Progress,
  RadioGroup,
  Radio,
  Slider,
  Switch,
  User,
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
  return (
    <ThemeProvider>
      <Container>
        <Button variant="shadow" color="warning">
          Button
        </Button>
      </Container>
    </ThemeProvider>
  )
}
