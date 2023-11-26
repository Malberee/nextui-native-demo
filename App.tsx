import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import { Avatar } from './src'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Avatar
        size="lg"
        radius="full"
        color="danger"
        isBordered
        source={{ uri: 'https://i.pravatar.cc/150?u=a04258114e29026708c' }}
      />
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
