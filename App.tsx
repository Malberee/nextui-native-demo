import { StatusBar } from 'expo-status-bar'
import Icon from 'react-native-vector-icons/Entypo'
import { StyleSheet, View, Text } from 'react-native'

import { Avatar, AvatarGroup, Badge } from './src'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AvatarGroup color="primary">
        <Badge color="danger" content={5} size="sm">
          <Avatar
            size="md"
            radius="full"
            color="danger"
            name="Max"
            // source={{ uri: 'https://i.pravatar.cc/150?u=a04258114e29026708c' }}
            // icon={<Icon name="camera" size={30} />}
            isBordered
            // isDisabled
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
