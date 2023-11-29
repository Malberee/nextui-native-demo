import { StatusBar } from 'expo-status-bar'
import Icon from 'react-native-vector-icons/Entypo'
import { StyleSheet, View, Text } from 'react-native'

import { Avatar, AvatarGroup, Badge, Divider, Code } from './src'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AvatarGroup color="primary" isGrid>
        <Badge
          color="danger"
          content={<Icon name="check" size={8} color="white" />}
          size="md"
          placement="bottom-left"
          shape="rectangle"
          isDot
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
        <Badge
          color="success"
          content={<Icon name="check" size={8} color="white" />}
          size="md"
          placement="bottom-right"
          shape="circle"
          isDot
        >
          <Avatar
            size={50}
            // radius="lg"
            name="Max"
            source={{ uri: 'https://i.pravatar.cc/150?u=a04258114e29026708c' }}
            icon={<Icon name="camera" size={30} color="white" />}
            isBordered
            isDisabled={false}
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
