import {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { clamp } from '../utils'
import { useEffect } from 'react'

export const useSliderAnimation = (
  defaultValue: number = 0,
  minValue: number = 0,
  maxValue: number = 100,
  trackWidth: number,
  thumbWidth: number,
  step: number = 1,
  onValueChange: (value: number) => void,
  onValueChangeEnd?: (value: number) => void,
) => {
  const sliderRange = trackWidth - thumbWidth
  const sliderStep = sliderRange / ((maxValue - minValue) / step)

  const translateX = useSharedValue(sliderStep * minValue)
  const isSliding = useSharedValue(false)
  const sliderValue = useSharedValue(String(minValue))
  const sliderPosition = useDerivedValue(() => {
    const value = (Number(sliderValue.value) - minValue) * sliderStep

    runOnJS(onValueChange)(Number(sliderValue.value))

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

      sliderValue.value = String(
        Math.round(translateX.value / sliderStep) + minValue,
      )
    },
    onEnd: () => {
      isSliding.value = false
      if (onValueChangeEnd) {
        runOnJS(onValueChangeEnd)(Number(sliderValue.value))
      }
    },
  })

  const animatedProgressStyle = useAnimatedStyle(() => {
    const value = Number(sliderValue.value)
    const width =
      value === minValue
        ? 0
        : value === maxValue
          ? '100%'
          : sliderPosition.value + thumbWidth / 2

    return {
      width,
    }
  })

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
    styles: {
      animatedProgressStyle,
      animatedTouchableThumbZoneStyle,
      animatedThumbStyle,
    },
  }
}
