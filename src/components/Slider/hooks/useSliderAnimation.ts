import {
  useAnimatedGestureHandler,
  useAnimatedProps,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated'
import { clamp } from '../utils'

export const useSliderAnimation = (
  defaultValue: number = 0,
  minValue: number = 0,
  maxValue: number = 100,
  trackWidth: number,
  thumbWidth: number,
  step: number = 1,
) => {
  const STEP = (trackWidth - thumbWidth) / maxValue ?? step
  const isSliding = useSharedValue(false)
  const translateX = useSharedValue(STEP * defaultValue)

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

      translateX.value = clamp(
        event.translationX + ctx.offsetX,
        minValue,
        trackWidth - thumbWidth,
      )
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
      width: translateX.value + thumbWidth,
    }
  })
  const stepText = useDerivedValue(() => {
    const step = Math.ceil(translateX.value / STEP)

    return String(step)
  })

  return {
    gestureHandler,
    animatedThumbStyle,
    animatedProgressStyle,
    stepText,
  }
}
