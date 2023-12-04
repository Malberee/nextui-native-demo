import React, { useState } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import Icon from 'react-native-vector-icons/Entypo'
import IconFeather from 'react-native-vector-icons/Feather'

import useColors from './src/components/ThemeProvider/hooks/useColors'
import styled, { css } from 'styled-components/native'

import { ThemeProvider, RadioGroup, Radio } from './src'

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
        <StatusBar style="auto" />

        <RadioGroup
          value="london"
          label="Radio group"
          size="md"
          orientation="vertical"
          color="secondary"
        >
          <Radio value="london" label="London" color="danger" />
          <Radio value="paris" label="Paris" color="warning" isDisabled />
          <Radio value="kyiv" label="Kyiv" color="success" />
          <Radio value="new-york" label="New York" color="primary" />
          <Radio value="dnipro" label="Dnipro" />
        </RadioGroup>
      </Container>
    </ThemeProvider>
  )
}
