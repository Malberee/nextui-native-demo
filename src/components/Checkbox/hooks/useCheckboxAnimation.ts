import {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

const useCheckboxAnimation = (isSelected: boolean) => {
  const scale = useSharedValue(1)

  const gestureHandler = useAnimatedGestureHandler({
    onStart: () => {
      scale.value = 0.97
    },
    onFinish: () => {
      scale.value = 1
    },
  })

  const animatedFillerStyles = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(isSelected ? 1 : 0, { duration: 250 }) }],
    opacity: withTiming(isSelected ? 1 : 0, { duration: 250 }),
  }))

  const animatedCheckboxStyles = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(scale.value, { duration: 100 }) }],
  }))

  return { animatedFillerStyles, animatedCheckboxStyles, gestureHandler }
}

export default useCheckboxAnimation
