import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

export const useProgressAnimation = (
  minValue: number,
  maxValue: number,
  value: number,
) => {
  const progress = useSharedValue(0)

  const range = maxValue - minValue
  progress.value = (value * 100) / range

  console.log(progress.value)

  const animatedProgressStyle = useAnimatedStyle(() => ({
    width: withTiming(`${progress.value}%`, { duration: 500 }),
  }))

  return { animatedProgressStyle }
}
