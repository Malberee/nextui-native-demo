import {
  useAnimatedStyle,
  useDerivedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated'
import { FormatOptions } from '../../../types'

export const useProgressAnimation = (
  minValue: number,
  maxValue: number,
  isIndeterminate: boolean,
  formatOptions?: FormatOptions,
  value: number = 0,
) => {
  const range = maxValue - minValue
  const progress = useDerivedValue(() => {
    if (
      formatOptions?.options?.style === 'percent' ||
      !formatOptions?.options?.style
    ) {
      return `${((value - minValue) * 100) / range}%`
    }
    return value.toLocaleString(formatOptions?.locale, formatOptions?.options)
  })

  const animatedProgressStyle = useAnimatedStyle(() => {
    if (isIndeterminate) {
      return {
        left: withRepeat(
          withSequence(
            withTiming('-100%', { duration: 1000 }),
            withTiming('100%', { duration: 1000 }),
          ),
          -1,
        ),
      }
    }

    const left = ((value - minValue) * 100) / range

    return {
      left: withTiming(`${left - 100}%`),
    }
  })

  return {
    progress,
    animatedProgressStyle,
  }
}
