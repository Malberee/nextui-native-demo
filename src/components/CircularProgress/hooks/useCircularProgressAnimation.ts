import { useEffect } from 'react'
import {
  useAnimatedProps,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated'
import { FormatOptions } from '../../../types'

const useCircularProgressAnimation = (
  circleLength: number,
  formatOptions: FormatOptions,
  isIndeterminate: boolean,
  minValue: number,
  maxValue: number,
  value: number = 0,
) => {
  const range = maxValue - minValue

  const valueInPercent = ((value - minValue) * 100) / range

  const progress = useSharedValue(0)
  const rotate = useSharedValue(0)

  useEffect(() => {
    if (isIndeterminate) {
      progress.value = withTiming(20, { duration: 1000 })
    } else {
      progress.value = withTiming(valueInPercent, { duration: 1000 })
    }
    rotate.value = withRepeat(
      withSequence(
        withTiming(0, { duration: 1000 }),
        withTiming(360, { duration: 1000 }),
      ),
      -1,
      true,
    )
  })

  const animatedCircleProps = useAnimatedProps(() => ({
    strokeDashoffset: circleLength * (1 - progress.value / 100),
  }))

  const animatedSvgStyles = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotate.value}deg` }],
  }))

  const progressText = useDerivedValue(() => {
    const string = Math.floor(progress.value)

    if (formatOptions?.options?.style === 'percent') {
      return `${string}%`
    }
    return string.toLocaleString(formatOptions.locale, formatOptions.options)
  })

  return { animatedCircleProps, animatedSvgStyles, progressText }
}

export default useCircularProgressAnimation
