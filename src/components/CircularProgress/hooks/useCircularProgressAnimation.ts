import { useEffect } from 'react'
import {
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { FormatOptions } from '../../../types'

const useCircularProgressAnimation = (
  circleLength: number,
  formatOptions: FormatOptions,
  minValue: number,
  maxValue: number,
  value: number = 0,
) => {
  const range = maxValue - minValue

  const valueInPercent = ((value - minValue) * 100) / range

  const progress = useSharedValue(0)

  useEffect(() => {
    progress.value = withTiming(valueInPercent, { duration: 1000 })
  })

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: circleLength * (1 - progress.value / 100),
  }))

  const progressText = useDerivedValue(() => {
    const string = Math.floor(progress.value)

    if (formatOptions?.options?.style === 'percent') {
      return `${string}%`
    }
    return string.toLocaleString(formatOptions.locale, formatOptions.options)
  })

  return { animatedProps, progressText }
}

export default useCircularProgressAnimation
