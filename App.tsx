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
  Accordion,
  AccordionItem,
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
  return (
    <ThemeProvider>
      <Container>
        <Accordion>
          <AccordionItem title="Accordion" subtitle="Press to expand">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A minus
            nobis doloribus iusto inventore impedit odit officiis perspiciatis
            eveniet eos dolorem molestias et, minima quidem natus vel quas,
            consequuntur aut!
          </AccordionItem>
          <AccordionItem title="Accordion" subtitle="Press to expand">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A minus
            nobis doloribus iusto inventore impedit odit officiis perspiciatis
            eveniet eos dolorem molestias et, minima quidem natus vel quas,
            consequuntur aut!
          </AccordionItem>
          <AccordionItem title="Accordion" subtitle="Press to expand">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A minus
            nobis doloribus iusto inventore impedit odit officiis perspiciatis
            eveniet eos dolorem molestias et, minima quidem natus vel quas,
            consequuntur aut!
          </AccordionItem>
        </Accordion>
      </Container>
    </ThemeProvider>
  )
}
