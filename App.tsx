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
  Button,
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
import { TextInput } from 'react-native'

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

  const values = ['0', '1', '2', '3', '4']

  return (
    <ThemeProvider>
      <Container>
        <CheckboxGroup
          label="Select anything"
          value={value}
          onValueChange={(item) => setValue(item)}
          isInvalid={value.includes('0')}
          errorMessage="Not zero"
        >
          {values.map((item) => (
            <Checkbox
              value={item}
              key={item}
              styles={{
                wrapper: css`
                  width: 100px;
                  display: flex;
                  justify-content: space-between;
                  background-color: ${value.includes(item)
                    ? '#ccc'
                    : 'transparent'};
                `,
              }}
            >
              {item}
            </Checkbox>
          ))}
        </CheckboxGroup>
        <Button onPress={() => console.log('text')} isDisabled>
          Button
        </Button>
      </Container>
    </ThemeProvider>
  )
}
