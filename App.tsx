import { StatusBar } from 'expo-status-bar'
import Icon from 'react-native-vector-icons/Entypo'
import { StyleSheet, View, Text } from 'react-native'

import { Avatar, AvatarGroup, Badge, Divider, Code } from './src'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AvatarGroup color="primary" size="md" isBordered isGrid>
        <Badge
          color="danger"
          size="sm"
          content="5"
          isOneChar
          shape="circle"
          isDot
          placement="bottom-right"
          showOutline
        >
          <Avatar
            color="warning"
            source={{ uri: 'https://i.pravatar.cc/150?u=a04258114e29026302d' }}
          />
        </Badge>
        <Badge
          content="new"
          // isOneChar
          color="danger"
          placement="bottom-right"
          shape="rectangle"
          showOutline
        >
          <Avatar
            // source={{ uri: 'https://i.pravatar.cc/150?u=a04258114e29026302d' }}
            radius="md"
            icon={<Icon name="user" size={24} color="white" />}
          />
        </Badge>
      </AvatarGroup>
      <Divider />
      <Code content="npm install @malberee/nextui-native" color="secondary" />
    </View>
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
