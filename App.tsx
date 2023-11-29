import { StatusBar } from 'expo-status-bar'
import Icon from 'react-native-vector-icons/Entypo'
import { StyleSheet, View, Text } from 'react-native'

import { Avatar, AvatarGroup, Badge, Divider, Code } from './src'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AvatarGroup color="primary" size={100} isBordered radius="lg">
        <Avatar
          color="secondary"
          size="lg"
          isBordered={false}
          isDisabled
          radius="sm"
          // source={{ uri: 'https://i.pravatar.cc/150?u=a04258114e29026302d' }}
          icon={<Icon name="user" size={24} color="white" />}
          name="Max"
        />
        <Avatar
          color="secondary"
          size="lg"
          isBordered={false}
          source={{ uri: 'https://i.pravatar.cc/150?u=a04258114e29026302d' }}
        />
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
