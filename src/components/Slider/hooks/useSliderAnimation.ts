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
  const translateX = useSharedValue(defaultValue)
  const isSliding = useSharedValue(false)
  const stepText = useDerivedValue(() => {
    const sliderRange = trackWidth - thumbWidth
    const valueRange = maxValue - minValue
    const oneStepValue = sliderRange / valueRange
    console.log('🦆  oneStepValue:', oneStepValue)
    const stepValue = Math.ceil(translateX.value / oneStepValue + minValue)

    return stepValue
  })

  type AnimatedGHContext = {
    start: number
    offsetX: number
  }

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx: AnimatedGHContext) => {
      ctx.offsetX = translateX.value
    },
    onActive: (event, ctx: AnimatedGHContext) => {
      // console.log(
      //   Math.round((translateX.value * 100) / (trackWidth - thumbWidth)) + '%',
      // )

      console.log(stepText.value)

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
    transform: [{ translateX: translateX.value - thumbWidth / 2 - 2 }],
  }))

  const animatedProgressStyle = useAnimatedStyle(() => ({
    width: translateX.value + thumbWidth,
  }))

  return {
    gestureHandler,
    values: {},
    styles: {
      animatedProgressStyle,
      animatedThumbStyle,
    },
  }
}
