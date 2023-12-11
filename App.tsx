import React, { useEffect, useState } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import IconFeather from 'react-native-vector-icons/Feather'
import IconAwesome from 'react-native-vector-icons/FontAwesome'

import useColors from './src/components/ThemeProvider/hooks/useColors'
import styled, { css } from 'styled-components/native'

import {
  ThemeProvider,
  AvatarGroup,
  Avatar,
  Badge,
  ButtonGroup,
  Button,
  Chip,
  Code,
  Divider,
  Progress,
  RadioGroup,
  Radio,
  Slider,
  Switch,
  User,
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
  const minValue = 30
  const maxValue = 50
  const [value, setValue] = useState(minValue)
  const [isChecked, setIsChecked] = useState(false)

  return (
    <ThemeProvider>
      <Container>
        <StatusBar style="light" />
        <AvatarGroup size="md" isBordered isGrid>
          <Avatar
            source={{ uri: 'https://i.pravatar.cc/150?u=a042581f4e29026024d' }}
            color="warning"
            radius="none"
          />
          <Avatar
            source={{ uri: 'https://i.pravatar.cc/150?u=a04258a2462d826712d' }}
            color="danger"
            radius="sm"
          />
          <Avatar
            source={{ uri: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' }}
            color="secondary"
            radius="md"
          />
          <Avatar
            source={{ uri: 'https://i.pravatar.cc/150?u=a04258114e29026302d' }}
            color="success"
            radius="lg"
          />
          <Badge color="danger" content="5" showOutline>
            <Avatar
              source={{
                uri: 'https://i.pravatar.cc/150?u=a04258114e29026708c',
              }}
              color="primary"
            />
          </Badge>
        </AvatarGroup>
        <Divider />
        <ButtonGroup color="warning" size="sm">
          <Button
            color="warning"
            variant="flat"
            startContent={
              <IconFeather name="download" size={15} color="black" />
            }
          >
            Button
          </Button>
          <Button
            color="danger"
            variant="bordered"
            endContent={<IconFeather name="download" size={15} color="black" />}
          >
            Button
          </Button>
          <Button color="secondary" variant="shadow">
            Button
          </Button>
          <Button color="success" variant="solid">
            Button
          </Button>
          <Button color="primary" variant="faded">
            Button
          </Button>
        </ButtonGroup>
        <Divider />
        <View style={{ flexDirection: 'row', gap: 4 }}>
          <Chip
            color="warning"
            variant="flat"
            radius="none"
            startContent={
              <IconFeather name="bookmark" size={12} color="black" />
            }
          >
            Chip
          </Chip>
          <Chip color="danger" variant="bordered" radius="sm">
            Chip
          </Chip>
          <Chip color="secondary" variant="shadow" radius="md">
            Chip
          </Chip>
          <Chip color="success" variant="solid" radius="lg">
            Chip
          </Chip>
          <Chip color="primary" variant="faded" radius="full">
            Chip
          </Chip>
        </View>
        <Divider />
        <View style={{ flexDirection: 'row', gap: 4 }}>
          <Code color="success" content="npm install @malberee/nextui-native" />
        </View>
        <Divider />
        <Progress label="Progress" value={60} />
        <Divider />
        <Slider
          defaultValue={6}
          showSteps
          maxValue={10}
          label="Slider"
          color="secondary"
          startContent={
            <Button isIconOnly variant="flat">
              <IconAwesome name="volume-down" color="black" />
            </Button>
          }
          endContent={
            <Button isIconOnly variant="flat">
              <IconAwesome name="volume-up" color="black" />
            </Button>
          }
        />
        <Divider />
        <View style={{ flexDirection: 'row', gap: 4 }}>
          <Switch />
          <Switch />
          <Switch color="success" />
        </View>
        <Divider />
        <User
          name="Malberee"
          description="🗿Full-Stack clown"
          avatarProps={{
            source: { uri: 'https://i.pravatar.cc/150?u=a04258114e29026708c' },
            color: 'primary',
          }}
        />
      </Container>
    </ThemeProvider>
  )
}
