import { useState } from 'react'
import {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated'

export const useProgressAnimation = (
  minValue: number,
  maxValue: number,
  value: number = 0,
  isIndeterminate: boolean,
) => {
  const range = maxValue - minValue
  const progress = useDerivedValue(() => {
    return `${((value - minValue) * 100) / range}%`
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

    return {
      left: withTiming(`${Number(progress.value.split('%')[0]) - 100}%`),
    }
  })

  return {
    progress,
    animatedProgressStyle,
  }
}
