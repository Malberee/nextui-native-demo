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

        <Chip variant="dot" color="warning">
          Active
        </Chip>
        <RadioGroup
          value={radioValue}
          label="Select your favorite city"
          size="md"
          orientation="horizontal"
          color="secondary"
          onValueChange={(value) => setRadioValue(value)}
          isInvalid={radioValue === 'london'}
          errorMessage="really?"
          isRequired
        >
          <Radio
            value="buenos-aires"
            label="Buenos Aires"
            description="The capital of Argentina"
          />
          <Radio
            value="paris"
            label="Paris"
            description="The capital of France"
            color="warning"
            isDisabled
          />
          <Radio
            value="kyiv"
            label="Kyiv"
            color="success"
            description="The capital of Ukraine"
          />
          <Radio
            value="tokyo"
            label="Tokyo"
            color="primary"
            description="The capital of Japan"
          />
          <Radio
            value="london"
            label="London"
            description="The capital of England"
          />
        </RadioGroup>
      </Container>
    </ThemeProvider>
  )
}
