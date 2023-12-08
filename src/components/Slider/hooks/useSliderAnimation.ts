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
  const isSliding = useSharedValue(false)
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
      isSliding.value = true
      translateX.value = translateX.value = clamp(
        event.translationX + ctx.offsetX,
        0,
        trackWidth - thumbWidth,
      )

      sliderValue.value = String(Math.round(translateX.value / sliderStep))
    },
    onEnd: () => {
      isSliding.value = false
    },
  })

  const animatedProgressStyle = useAnimatedStyle(() => ({
    width: sliderPosition.value + thumbWidth,
  }))

  const animatedTouchableThumbZoneStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX:
          sliderPosition.value - thumbWidth / 2 - (thumbWidth === 20 ? 2 : 0),
      },
    ],
  }))

  const animatedThumbStyle = useAnimatedStyle(() => ({
    borderWidth: withTiming(isSliding.value ? 6 : 4, { duration: 150 }),
  }))

  return {
    gestureHandler,
    values: {
      sliderValue,
    },
    styles: {
      animatedProgressStyle,
      animatedTouchableThumbZoneStyle,
      animatedThumbStyle,
    },
  }
}
