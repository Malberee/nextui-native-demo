import {
  useAnimatedGestureHandler,
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
  const translateX = useSharedValue(defaultValue)
  const isSliding = useSharedValue(false)

  const sliderRange = trackWidth - thumbWidth
  const valueRange = maxValue - minValue
  const oneStepValue = sliderRange / valueRange
  const sliderValue = useDerivedValue(() => {
    const stepValue = Math.ceil(translateX.value / oneStepValue + minValue)

    return `${stepValue}`
  })
  const thumbPosition = useSharedValue(0)

  type AnimatedGHContext = {
    start: number
    offsetX: number
  }

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx: AnimatedGHContext) => {
      ctx.offsetX = translateX.value
    },
    onActive: (event, ctx: AnimatedGHContext) => {
      thumbPosition.value = (Number(sliderValue.value) - minValue) * oneStepValue

      isSliding.value = true
      translateX.value = clamp(
        event.translationX + ctx.offsetX,
        0,
        trackWidth - thumbWidth,
      )
    },
    onEnd: () => {
      isSliding.value = false
    },
  })

  const animatedThumbStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: thumbPosition.value - thumbWidth / 2 }],
  }))

  const animatedProgressStyle = useAnimatedStyle(() => ({
    width: Number(sliderValue.value) === minValue ? 0 : thumbPosition.value + thumbWidth,
  }))

  return {
    gestureHandler,
    values: {
      sliderValue,
    },
    styles: {
      animatedProgressStyle,
      animatedThumbStyle,
    },
  }
}
