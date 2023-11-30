import { StatusBar } from 'expo-status-bar'
import Icon from 'react-native-vector-icons/Entypo'
import { StyleSheet, View, Text } from 'react-native'

import { ThemeProvider, Avatar, AvatarGroup, Badge, Divider, Code } from './src'

export default function App() {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <AvatarGroup color="danger" size="md" isBordered>
          <Badge isDot placement="bottom-left" shape="circle" color="success">
            <Avatar
              source={{ uri: 'https://i.pravatar.cc/150?u=a04258114e29026708c' }}
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
              source={{ uri: 'https://i.pravatar.cc/150?u=a04258a2462d826712d' }}
            />
          </Badge>
        </AvatarGroup>
        <Divider />
        <AvatarGroup color="danger" size="md" isBordered isGrid>
          <Badge isDot placement="bottom-left" shape="circle" color="success">
            <Avatar
              source={{ uri: 'https://i.pravatar.cc/150?u=a04258114e29026708c' }}
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
              source={{ uri: 'https://i.pravatar.cc/150?u=a04258a2462d826712d' }}
            />
          </Badge>
        </AvatarGroup>
        <Divider />
        <Code content="npm install @malberee/nextui-native" color="secondary" />
      </View>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
