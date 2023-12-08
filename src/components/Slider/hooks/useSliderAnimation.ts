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
  const sliderRange = trackWidth - thumbWidth
  const sliderStep = sliderRange / (maxValue - minValue)

  const translateX = useSharedValue(defaultValue * sliderStep)
  const sliderValue = useSharedValue(String(defaultValue))
  const sliderPosition = useDerivedValue(() => {
    const value = Number(sliderValue.value) * sliderStep

    return value
  })

  type AnimatedGHContext = {
    offsetX: number
  }

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx: AnimatedGHContext) => {
      ctx.offsetX = translateX.value
    },
    onActive: (event, ctx: AnimatedGHContext) => {
      translateX.value = translateX.value = clamp(
        event.translationX + ctx.offsetX,
        0,
        trackWidth - thumbWidth,
      )

      sliderValue.value = String(Math.round(translateX.value / sliderStep))
    },
  })

  const animatedProgressStyle = useAnimatedStyle(() => ({
    width: sliderPosition.value + thumbWidth,
  }))

  const animatedThumbStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX:
          sliderPosition.value - thumbWidth / 2 - (thumbWidth === 20 ? 2 : 0),
      },
    ],
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
