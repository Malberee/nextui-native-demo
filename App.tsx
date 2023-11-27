import { StatusBar } from 'expo-status-bar'
import Icon from 'react-native-vector-icons/Entypo'
import { StyleSheet, View } from 'react-native'

import { Avatar, AvatarGroup } from './src'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AvatarGroup isBordered isGrid color="danger">
        <Avatar
          source={{ uri: 'https://i.pravatar.cc/150?u=a04258114e29026708c' }}
        />
        <Avatar
          source={{ uri: 'https://i.pravatar.cc/150?u=a04258114e29026708c' }}
          color="success"
          radius="lg"
          size="lg"
        />
        <Avatar
          source={{ uri: 'https://i.pravatar.cc/150?u=a04258114e29026708c' }}
          color="warning"
          radius="md"
          isBordered={false}
          isDisabled={false}
        />
      </AvatarGroup>
      {/* <Avatar
        size="lg"
        radius="lg"
        color="warning"
        name="Max"
        source={{ uri: 'https://i.pravatar.cc/150?u=a04258114e29026708c' }}
        icon={<Icon name="camera" size={30} />}
        isBordered
        // isDisabled
      /> */}
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
