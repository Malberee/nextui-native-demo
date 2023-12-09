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
        <Slider
          size="lg"
          color="danger"
          label="Slider"
          maxValue={10}
          minValue={0}
          step={2}
          showSteps
          onValueChangeEnd={(value) => console.log(value)}
          // defaultValue={[6, 5]}
          // hideThumb
          startContent={
            <Button variant="light" isIconOnly color="danger">
              <IconAwesome name="volume-down" size={24} />
            </Button>
          }
          endContent={
            <Button variant="light" isIconOnly color="danger">
              <IconAwesome name="volume-up" size={24} />
            </Button>
          }
        />
      </Container>
    </ThemeProvider>
  )
}
