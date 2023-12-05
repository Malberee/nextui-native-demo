import React, { useState } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import Icon from 'react-native-vector-icons/Entypo'
import IconFeather from 'react-native-vector-icons/Feather'

import useColors from './src/components/ThemeProvider/hooks/useColors'
import styled, { css } from 'styled-components/native'

import { ThemeProvider, RadioGroup, Radio, Chip } from './src'

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
  const [radioValue, setRadioValue] = useState('london')

  return (
    <ThemeProvider>
      <Container>
        <StatusBar style="light" />

        <Chip variant="dot" color="warning">Active</Chip>
        <RadioGroup
          value={radioValue}
          label="Select a capital of Ukraine"
          size="md"
          orientation="vertical"
          color="secondary"
          onValueChange={(value) => setRadioValue(value)}
          isInvalid={radioValue === 'new-york'}
          errorMessage="New York is not a capital of Ukraine"
          isRequired
        >
          <Radio
            value="london"
            label="London"
            color="danger"
            description="london is a capital of great britan"
          />
          <Radio value="paris" label="Paris" color="warning" isDisabled />
          <Radio value="kyiv" label="Kyiv" color="success" />
          <Radio value="new-york" label="New York" color="primary" />
          <Radio value="dnipro" label="Dnipro" />
        </RadioGroup>
      </Container>
    </ThemeProvider>
  )
}
