import React, { useState } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import Icon from 'react-native-vector-icons/Entypo'
import IconFeather from 'react-native-vector-icons/Feather'

import useColors from './src/components/ThemeProvider/hooks/useColors'
import styled, { css } from 'styled-components/native'

import {
  ThemeProvider,
  Avatar,
  AvatarGroup,
  Badge,
  Divider,
  Code,
  Button,
  ButtonGroup,
  User,
  Chip,
  Switch,
} from './src'

const Container = styled(GestureHandlerRootView)(() => {
  const { colors } = useColors()
  return css`
    flex: 1;
    background-color: ${colors.background};
    align-items: center;
    justify-content: center;
  `
})

export default function App() {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <ThemeProvider>
        <Container>
          <StatusBar style="auto" />
          <User
            name="Malberee"
            description="🗿 Fullstack clown"
            avatarProps={{
              source: {
                uri: 'https://i.pravatar.cc/150?u=a04258114e29026708c',
              },
              isBordered: true,
              color: 'success',
            }}
          />
          <Divider />
          <AvatarGroup color="danger" size="md" isBordered>
            <Badge
              isDot
              placement="bottom-left"
              shape="circle"
              color="success"
              variant="shadow"
            >
              <Avatar
                source={{
                  uri: 'https://i.pravatar.cc/150?u=a04258114e29026708c',
                }}
                isBordered={false}
              />
            </Badge>
            <Badge isDot placement="bottom-left" shape="circle" color="success">
              <Avatar
                isDisabled
                icon={<Icon name="home" size={20} color="white" />}
                color="secondary"
              />
            </Badge>
            <Avatar
              source={{
                uri: 'https://i.pravatar.cc/300?u=a042581f4e290267072',
              }}
              color="primary"
            />
            <Badge
              placement="top-right"
              shape="circle"
              color="danger"
              content={<Icon name="home" color="white" />}
              isOneChar
              size="md"
              variant="solid"
              showOutline
              // isDot
            >
              <Avatar
                color="danger"
                source={{
                  uri: 'https://i.pravatar.cc/150?u=a04258a2462d826712d',
                }}
              />
            </Badge>
          </AvatarGroup>
          <Divider />
          <AvatarGroup color="danger" size="md" isBordered isGrid>
            <Badge isDot placement="bottom-left" shape="circle" color="success">
              <Avatar
                source={{
                  uri: 'https://i.pravatar.cc/150?u=a04258114e29026708c',
                }}
                isBordered={false}
              />
            </Badge>
            <Badge isDot placement="bottom-left" shape="circle" color="success">
              <Avatar
                isDisabled
                icon={<Icon name="home" size={20} color="white" />}
                color="secondary"
              />
            </Badge>
            <Avatar
              source={{
                uri: 'https://i.pravatar.cc/300?u=a042581f4e290267072',
              }}
              color="primary"
            />
            <Badge
              placement="top-right"
              shape="circle"
              color="danger"
              content="5"
              isOneChar
              size="md"
            >
              <Avatar
                color="warning"
                source={{
                  uri: 'https://i.pravatar.cc/150?u=a04258a2462d826712d',
                }}
              />
            </Badge>
          </AvatarGroup>
          <Divider />
          <Code content="npm install @malberee/nextui-native" color="success" />
          <Divider />
          <ButtonGroup
            color="secondary"
            size="md"
            radius="lg"
            variant="flat"
            fullWidth
          >
            <Button color="success" variant="solid">
              Submit
            </Button>
            <Button color="warning">Submit</Button>
            <Button color="primary" variant="bordered">
              Submit
            </Button>
            <Button color="secondary" variant="shadow">
              Submit
            </Button>
            <Button color="danger" variant="faded">
              Submit
            </Button>
          </ButtonGroup>
          <Divider />
          <Chip
            color="secondary"
            radius="full"
            size="md"
            variant="flat"
            onClose={(e) => console.log('text')}
            startContent={<Icon name="home" size={15} color="white" />}
            avatar={
              <Avatar
                source={{
                  uri: 'https://i.pravatar.cc/150?u=a04258114e29026708c',
                }}
              />
            }
          >
            Chip
          </Chip>
          <Chip
            color="secondary"
            radius="full"
            size="md"
            variant="shadow"
            onClose={(e) => console.log('text')}
            startContent={<Icon name="home" size={15} color="white" />}
            avatar={
              <Avatar
                source={{
                  uri: 'https://i.pravatar.cc/150?u=a04258114e29026708c',
                }}
              />
            }
          >
            Chip
          </Chip>
          <Divider />
          <Switch
            startContent={<IconFeather name="sun" size={15} color="white" />}
            endContent={<IconFeather name="moon" size={15} color="white" />}
            thumbIcon={
              isChecked ? (
                <IconFeather name="moon" size={15} color="black" />
              ) : (
                <IconFeather name="sun" size={15} color="black" />
              )
            }
            size="lg"
            color="primary"
            isSelected={isChecked}
            onValueChange={(isSelected) => setIsChecked(!isSelected)}
          >
            checkbox
          </Switch>
        </Container>
    </ThemeProvider>
  )
}
