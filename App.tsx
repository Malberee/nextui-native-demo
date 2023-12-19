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

const styles = {
  wrapper: css`
    width: 300;
    margin-bottom: 8px;
    justify-content: space-between;
    flex-direction: row-reverse;
    background-color: #353535;
    border-radius: 8px;
  `,
}

console.log(styles)

export default function App() {
  const [radio, setRadio] = useState('1')

  return (
    <ThemeProvider>
      <Container>
        <RadioGroup
          size="lg"
          color="success"
          onValueChange={(value: string) => setRadio(value)}
          value={radio}
        >
          <Radio
            value="1"
            label="Radio"
            description="description"
            styles={styles}
          />
          <Radio
            value="2"
            label="Radio"
            description="description"
            styles={styles}
          />
          <Radio
            value="3"
            label="Radio"
            description="description"
            styles={styles}
          />
        </RadioGroup>
      </Container>
    </ThemeProvider>
  )
}
