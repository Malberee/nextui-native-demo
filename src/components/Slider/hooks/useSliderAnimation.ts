import {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'

export const useSliderAnimation = (
  defaultValue: number = 0,
  minValue: number = 0,
  maxValue: number = 100,
  trackWidth: number,
) => {
  const translateX = useSharedValue(defaultValue)
  const isSliding = useSharedValue(false)

  type AnimatedGHContext = {
    start: number
    offsetX: number
  }

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx: AnimatedGHContext) => {
      ctx.offsetX = translateX.value
    },
    onActive: (event, ctx: AnimatedGHContext) => {
      isSliding.value = true
      translateX.value = event.translationX + ctx.offsetX
    },
    onEnd: () => {
      isSliding.value = false
    },
  })

  const animatedThumbStyle = useAnimatedStyle(() => {
    return { transform: [{ translateX: translateX.value }] }
  })
  const animatedProgressStyle = useAnimatedStyle(() => {
    return {
      width: translateX.value + 24,
    }
  })

  return { gestureHandler, animatedThumbStyle, animatedProgressStyle }
}
