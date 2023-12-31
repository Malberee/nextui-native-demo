import React from 'react'
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
  return (
    <ThemeProvider>
      <Container>
        <CheckboxGroup size="lg" color="warning">
          <Checkbox size="sm" value="0" radius="full">
            <Text>Checkbox</Text>
          </Checkbox>
          <Checkbox color="danger" value="1">
            <Text>Checkbox</Text>
          </Checkbox>
        </CheckboxGroup>
      </Container>
    </ThemeProvider>
  )
}
