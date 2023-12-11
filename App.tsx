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
        <AvatarGroup size="md">
          <Avatar />
        </AvatarGroup>
      </Container>
    </ThemeProvider>
  )
}
