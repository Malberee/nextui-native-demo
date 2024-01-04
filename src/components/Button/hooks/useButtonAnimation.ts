import { View } from 'react-native'
import {
  measure,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

export const useButtonAnimation = () => {
  const buttonScale = useSharedValue(1)
  const rippleScale = useSharedValue(0)
  const rippleOpacity = useSharedValue(1)
  const centerX = useSharedValue(0)
  const centerY = useSharedValue(0)

  const ref = useAnimatedRef<View>()
  const width = useSharedValue(0)
  const height = useSharedValue(0)

  const gestureHandler = useAnimatedGestureHandler({
    onStart: () => {
      buttonScale.value = 0.98
    },
    onFinish: (event: any) => {
      const layout = measure(ref)
      width.value = layout.width
      height.value = layout.height

      buttonScale.value = 1
      rippleScale.value = 0
      rippleScale.value = withTiming(1, { duration: 700 })

      rippleOpacity.value = 1
      rippleOpacity.value = withTiming(0, { duration: 700 })

      centerX.value = event.x
      centerY.value = event.y
    },
  })

  const animatedButtonStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(buttonScale.value, { duration: 100 }) }],
  }))

  const animatedRippleStyle = useAnimatedStyle(() => {
    const circleRadius = Math.sqrt(width.value ** 2 + height.value ** 2)
    const translateX = centerX.value - circleRadius
    const translateY = centerY.value - circleRadius

    return {
      width: circleRadius * 2,
      height: circleRadius * 2,
      opacity: rippleOpacity.value,
      transform: [{ translateX }, { translateY }, { scale: rippleScale.value }],
    }
  })

  return { gestureHandler, ref, animatedButtonStyle, animatedRippleStyle }
}
