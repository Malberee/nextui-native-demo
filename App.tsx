import React, { useEffect, useState } from 'react'
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
  Progress,
  ButtonGroup,
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
  const minValue = 30
  const maxValue = 50
  const [value, setValue] = useState(minValue)
  const [isChecked, setIsChecked] = useState(false)

  return (
    <ThemeProvider>
      <Container>
        <StatusBar style="light" />
        <ButtonGroup size="lg" color="success" variant="flat">
          <Button isIconOnly onPress={() => setValue(value - 10)}>
            -
          </Button>
          <Button isIconOnly onPress={() => setValue(value + 10)}>
            +
          </Button>
          <Button color='danger' onPress={() => setIsChecked(prevState => !prevState)}>
            toggle
          </Button>
        </ButtonGroup>
        <Progress
          color="primary"
          size="lg"
          radius="full"
          minValue={minValue}
          maxValue={maxValue}
          value={value}
          label="Progress"
          valueLabel={value}
          isIndeterminate={isChecked}
        />
      </Container>
    </ThemeProvider>
  )
}
