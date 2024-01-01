import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

const useCheckboxAnimation = (isSelected: boolean) => {
  const scale = useSharedValue(1)

  const gestureHandler = useAnimatedGestureHandler({
    onStart: () => {
      scale.value = withTiming(0.5)
    },
    onFinish: () => {
      scale.value = withTiming(1)
    },
  })

  const animatedCheckboxStyles = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(isSelected ? 1 : 0, { duration: 250 }) }],
    opacity: withTiming(isSelected ? 1 : 0, { duration: 250 }),
  }))

  return { animatedCheckboxStyles, gestureHandler }
}

export default useCheckboxAnimation
