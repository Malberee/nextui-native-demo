import React from 'react'
import styled, { css } from 'styled-components/native'
import type {} from 'styled-components/cssprop'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Archive } from 'nextui-native-icons'

import useColors from './src/components/ThemeProvider/hooks/useColors'

import {
  ThemeProvider,
  // AvatarGroup,
  Avatar,
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
          <AccordionItem
            title="Accordion"
            subtitle="Press to expand"
            // hideIndicator
            indicator={<Archive color="white" width={20} height={20} />}
            startContent={
              <Avatar
                color="success"
                radius="md"
                isBordered
                source={{
                  uri: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
                }}
              />
            }
          >
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
