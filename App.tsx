import React, { useState } from 'react'
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
  RadioGroup,
  Radio,
  // Slider,
  // Switch,
  // User,
  // Accordion,
  // AccordionItem,
  CheckboxGroup,
  Checkbox,
} from './src'

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
  const [items, setItems] = useState<string>('2')

  return (
    <ThemeProvider>
      <Container>
        <RadioGroup value={items} onValueChange={(item) => setItems(item)}>
          <Radio
            label="Radio"
            value="0"
            styles={{
              wrapper: css`
                background-color: ${items === '0' ? 'black' : 'white'};
              `,
            }}
          />
          <Radio label="Radio" value="1" />
          <Radio label="Radio" value="2" />
          <Radio label="Radio" value="3" />
        </RadioGroup>
      </Container>
    </ThemeProvider>
  )
}
