import React, { useState } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import Icon from 'react-native-vector-icons/Entypo'
import IconFeather from 'react-native-vector-icons/Feather'
import IconAwesome from 'react-native-vector-icons/FontAwesome'

import useColors from './src/components/ThemeProvider/hooks/useColors'
import styled, { css } from 'styled-components/native'

import {
  ThemeProvider,
  RadioGroup,
  Radio,
  Chip,
  Switch,
  Slider,
  Button,
  Progress
} from './src'

const Container = styled(GestureHandlerRootView)(() => {
  const { colors } = useColors()
  return css`
    flex: 1;
    background-color: ${colors.background};
    align-items: center;
    justify-content: center;
  `
})

export default function App() {
  return (
    <ThemeProvider>
      <Container>
        <StatusBar style="light" />
        <Progress color="primary" size="lg" radius="sm" />
      </Container>
    </ThemeProvider>
  )
}
