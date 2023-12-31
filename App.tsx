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
  // Button,
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
  const [items, setItems] = useState<string[]>([])
  const [isSelected, setIsSelected] = useState(false)

  const addItem = (value: string[]) => {
    setItems(value)
  }

  useEffect(() => {
    console.log(items)
  }, [items])

  return (
    <ThemeProvider>
      <Container>
        <CheckboxGroup
          size="lg"
          color="warning"
          value={items}
          onValueChange={addItem}
        >
          <Checkbox size="sm" value="0" radius="full" label="Checkbox" />
          <Checkbox color="danger" value="1" label="Checkbox" />
          <Checkbox color="danger" value="2" label="Checkbox" />
          <Checkbox color="danger" value="3" label="Checkbox" />
          <Checkbox color="danger" value="4" label="Checkbox" />
        </CheckboxGroup>
        <Checkbox
          color="danger"
          value="4"
          label="Checkbox"
          isSelected={isSelected}
          onValueChange={(value: boolean) => setIsSelected(value)}
        />
        <Text>{items}</Text>
      </Container>
    </ThemeProvider>
  )
}
