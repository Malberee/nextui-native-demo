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
        width: 300px;
        margin-bottom: 8px;
        justify-content: space-between;
        flex-direction: row-reverse;
        background-color: #18181b;
        border-radius: 8px;
      `,
      active: css`
        border-color: #17c964;
        border-width: 2px;
      `,
    },
  }

  return (
    <ThemeProvider>
      <Container>
        <RadioGroup size="lg" color="success">
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
        <RadioGroup size="lg" color="success">
          <Radio value="1" label="Radio" description="description" />
          <Radio value="2" label="Radio" description="description" />
          <Radio value="3" label="Radio" description="description" />
        </RadioGroup>
      </Container>
    </ThemeProvider>
  )
}
