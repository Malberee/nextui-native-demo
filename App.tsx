import React, { useState } from 'react'
import styled, { css } from 'styled-components/native'

import type {} from 'styled-components/cssprop'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Sms } from 'nextui-native-icons'

import useColors from './src/components/ThemeProvider/hooks/useColors'

import {
  ThemeProvider,
  // AvatarGroup,
  Avatar,
  Badge,
  // ButtonGroup,
  Button,
  // Chip,
  // Code,
  // Divider,
  // Progress,
  // RadioGroup,
  // Radio,
  // Slider,
  // Switch,
  // User,
  // Accordion,
  // AccordionItem,
  CheckboxGroup,
  Checkbox,
  Input,
} from './src'
import { Text } from 'react-native'

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
  const [value, setValue] = useState<string[]>([])
  const [showBadge, setShowBadge] = useState(false)

  const values = ['0', '1', '2', '3', '4']

  return (
    <ThemeProvider>
      <Container>
        <Input
          placeholder="Enter your email"
          label="Email"
          description="We`ll never share your email with anyone else."
          color="secondary"
          isClearable
          labelPlacement="outside"
          size="lg"
        />
        <Input
          startContent={<Sms color="black" />}
          // endContent={<Text>@gmail.com</Text>}
          placeholder="Enter your email"
          label="Email"
          description="We`ll never share your email with anyone else."
          color="secondary"
          isClearable
          labelPlacement="outside-left"
          size="lg"
        />
        <Input
          // startContent={<Sms color="black" />}
          endContent={<Text>@gmail.com</Text>}
          // placeholder="Enter your email"
          label="Email"
          description="We`ll never share your email with anyone else."
          color="secondary"
          isClearable
          labelPlacement="inside"
          size="lg"
        />
      </Container>
    </ThemeProvider>
  )
}
