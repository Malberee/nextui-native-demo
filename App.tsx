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

export default function App() {
  const styles = {
    wrapper: {
      default: css`
        background-color: #ccc;
      `,
      active: css`
        background-color: #fff;
      `,
    },
  }

  return (
    <ThemeProvider>
      <Container>
        <RadioGroup>
          <Radio value="1" label="Radio" styles={styles} />
          <Radio value="2" label="Radio" styles={styles} />
          <Radio value="3" label="Radio" styles={styles} />
          <Radio value="4" label="Radio" styles={styles} />
        </RadioGroup>
      </Container>
    </ThemeProvider>
  )
}
