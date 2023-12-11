import { useState } from 'react'
import {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

export const useProgressAnimation = (
  minValue: number,
  maxValue: number,
  value: number = 0,
  trackWidth: number,
) => {
  const range = maxValue - minValue
  const progress = useDerivedValue(() => {
    return `${(value * 100) / range - minValue}%`
  })

  const animatedProgressStyle = useAnimatedStyle(() => ({
    left: withTiming(`${Number(progress.value.split('%')[0]) - 100}%`),
  }))

  return {
    progress: progress,
    animatedProgressStyle,
  }
}
