import {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

export const useButtonAnimation = () => {
  const scale = useSharedValue(1)

  const gestureHandler = useAnimatedGestureHandler({
    onStart: () => {
      scale.value = 0.95
    },
    onFinish: () => {
      scale.value = 1
    },
  })

  const animatedButtonStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(scale.value, { duration: 100 }) }],
  }))

  return { gestureHandler, animatedButtonStyle }
}
