import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import useColors from './src/components/ThemeProvider/hooks/useColors'
import styled, { css } from 'styled-components/native'

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
  wrapper: {
    default: {
      width: 300,
      marginBottom: 8,
      justifyContent: 'space-between',
      flexDirection: 'row-reverse',
      backgroundColor: '#353535',
      borderRadius: 8,
    },
    active: {
      borderColor: 'red',
      borderWidth: 2,
    },
  },
}

export default function App() {
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
      </Container>
    </ThemeProvider>
  )
}
