import {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
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
  const valueRange = maxValue - minValue + 1
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
      thumbPosition.value = withTiming(
        (Number(sliderValue.value) - minValue) * oneStepValue,
        { duration: 100 },
      )

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
    transform: [
      {
        translateX:
          thumbPosition.value - thumbWidth / 2 - (thumbWidth === 20 ? 2 : 0),
      },
    ],
  }))

  const animatedProgressStyle = useAnimatedStyle(() => ({
    width: thumbPosition.value + thumbWidth,
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
