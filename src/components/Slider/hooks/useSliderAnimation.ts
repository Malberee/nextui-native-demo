import {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { clamp } from '../utils'
import { FormatOptions } from '../../../types'

export const useSliderAnimation = (
  defaultValue: number,
  minValue: number,
  maxValue: number,
  trackWidth: number,
  thumbWidth: number,
  step: number,
  onValueChange: (value: number) => void,
  onValueChangeEnd?: (value: number) => void,
) => {
  const sliderRange = trackWidth - thumbWidth
  const sliderStep = sliderRange / ((maxValue - minValue) / step)

  const isSliding = useSharedValue(false)
  const translateX = useSharedValue(0)
  const sliderValue = useSharedValue(String(defaultValue || minValue))
  const sliderPosition = useDerivedValue(() => {
    const value = (Number(sliderValue.value) - minValue) * sliderStep

    runOnJS(onValueChange)(Number(sliderValue.value))

    return value / step
  })

  const handleButton = (action: 'increment' | 'decrement') => {
    const value = Number(sliderValue.value)

    translateX.value = sliderPosition.value

    if (action === 'decrement' && value > minValue) {
      sliderValue.value = String(value - step)
    }
    if (action === 'increment' && value < maxValue) {
      sliderValue.value = String(value + step)
    }
  }

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
        Math.round(translateX.value / sliderStep) * step + minValue,
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
          : sliderPosition.value + thumbWidth

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
    handleButton,
    styles: {
      animatedProgressStyle,
      animatedTouchableThumbZoneStyle,
      animatedThumbStyle,
    },
  }
}
