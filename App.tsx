import { StatusBar } from 'expo-status-bar'
import { Text } from 'react-native'
import styled, { css } from 'styled-components/native'
import Icon from 'react-native-vector-icons/Entypo'
import useColors from './src/components/ThemeProvider/hooks/useColors'

import {
  ThemeProvider,
  Avatar,
  AvatarGroup,
  Badge,
  Divider,
  Code,
  Button,
  ButtonGroup,
} from './src'

const Container = styled.View(() => {
  const { colors } = useColors()
  return css`
    flex: 1;
    background-color: ${colors.background};
    align-items: center;
    justify-content: center;
  `
})

export default function App() {
  return (
    <ThemeProvider>
      <Container>
        <StatusBar style="auto" />
        <AvatarGroup color="danger" size="md" isBordered>
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
            source={{ uri: 'https://i.pravatar.cc/300?u=a042581f4e290267072' }}
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
            source={{ uri: 'https://i.pravatar.cc/300?u=a042581f4e290267072' }}
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
          <Button color="success" onPressIn={(e) => console.log('pressIn')}>
            Submit
          </Button>
          <Button color="warning">Submit</Button>
          <Button color="primary">Submit</Button>
          <Button color="danger">Submit</Button>
        </ButtonGroup>
        {/* <ButtonGroup color="secondary" size="lg" radius="lg">
          <Button color="danger" variant="faded">
            Submit
          </Button>
          <Button color="warning">Submit</Button>
        </ButtonGroup>
        <ButtonGroup color="secondary" size="lg" radius="lg">
          <Button color="danger" variant="bordered">
            Submit
          </Button>
          <Button color="danger" variant="light">
            Submit
          </Button>
          <Button
            color="danger"
            variant="shadow"
            startContent={<Icon name="home" size={30} color="white" />}
            isIconOnly
          >
            <Icon name="home" size={30} color="white" />
          </Button>
        </ButtonGroup> */}
      </Container>
    </ThemeProvider>
  )
}
