import { StatusBar } from 'expo-status-bar'
import Icon from 'react-native-vector-icons/Entypo'
import { StyleSheet, View } from 'react-native'

import { Avatar, AvatarGroup, Badge } from './src'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AvatarGroup color="primary">
        <Badge
          color="danger"
          content="new"
          size="md"
          placement="bottom-left"
          shape="rectangle"
        >
          <Avatar
            size={50}
            radius="lg"
            color="success"
            name="Max"
            // source={{ uri: 'https://i.pravatar.cc/150?u=a04258114e29026708c' }}
            icon={<Icon name="camera" size={30} color="white" />}
            isBordered
            // isDisabled
          />
        </Badge>
        <Badge content="new" size="md" placement="bottom-right" shape="circle">
          <Avatar
            size={50}
            radius="full"
            name="Max"
            // source={{ uri: 'https://i.pravatar.cc/150?u=a04258114e29026708c' }}
            icon={<Icon name="camera" size={30} color="white" />}
            isBordered
            // isDisabled
          />
        </Badge>
        <Badge
          color="danger"
          content="new"
          size="md"
          placement="top-left"
          shape="rectangle"
        >
          <Avatar
            size={50}
            radius="lg"
            color="success"
            name="Max"
            // source={{ uri: 'https://i.pravatar.cc/150?u=a04258114e29026708c' }}
            icon={<Icon name="camera" size={30} color="white" />}
            isBordered
            // isDisabled
          />
        </Badge>
        <Badge content="n" size="md" placement="bottom-right" color='success' shape="circle" isDot>
          <Avatar
            size={50}
            radius="full"
            name="Max"
            // source={{ uri: 'https://i.pravatar.cc/150?u=a04258114e29026708c' }}
            icon={<Icon name="camera" size={30} color="white" />}
            isBordered
            isDisabled
          />
        </Badge>
      </AvatarGroup>
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
