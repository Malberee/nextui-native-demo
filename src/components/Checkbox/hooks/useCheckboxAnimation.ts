import {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

const useCheckboxAnimation = (isSelected: boolean, lineThrough: boolean) => {
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

  const animatedLineStyles = useAnimatedStyle(() => ({
    width: withTiming(lineThrough && isSelected ? '100%' : '0%', {
      duration: 250,
    }),
  }))

  const animatedOpacityStyles = useAnimatedStyle(() => ({
    opacity: withTiming(lineThrough && isSelected ? 0.5 : 1, {
      duration: 250,
    }),
  }))

  return {
    animatedFillerStyles,
    animatedCheckboxStyles,
    animatedLineStyles,
    animatedOpacityStyles,
    gestureHandler,
  }
}

export default useCheckboxAnimation
