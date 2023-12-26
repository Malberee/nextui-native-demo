import React from 'react'
import styled, { css } from 'styled-components/native'
import type {} from 'styled-components/cssprop'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Crown } from 'nextui-native-icons'

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
  Switch,
  // User,
  Accordion,
  AccordionItem,
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
        <Accordion
          variant="splitted"
          onSelectionChange={(keys) => console.log(keys)}
        >
          <AccordionItem
            title="Accordion"
            subtitle="Press to expand"
            // hideIndicator
            indicator={<Crown color="red" width={20} height={20} />}
            disableIndicatorAnimation
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
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A minus
              nobis doloribus iusto inventore impedit odit officiis perspiciatis
              eveniet eos dolorem molestias et, minima quidem natus vel quas,
              consequuntur aut!
            </Text>
            <Switch />
          </AccordionItem>
          <AccordionItem title="Accordion" subtitle="Press to expand">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A minus
              nobis doloribus iusto inventore impedit odit officiis perspiciatis
              eveniet eos dolorem molestias et, minima quidem natus vel quas,
              consequuntur aut!
            </Text>
          </AccordionItem>
          <AccordionItem title="Accordion" subtitle="Press to expand">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A minus
              nobis doloribus iusto inventore impedit odit officiis perspiciatis
              eveniet eos dolorem molestias et, minima quidem natus vel quas,
              consequuntur aut!
            </Text>
          </AccordionItem>
        </Accordion>
      </Container>
    </ThemeProvider>
  )
}
