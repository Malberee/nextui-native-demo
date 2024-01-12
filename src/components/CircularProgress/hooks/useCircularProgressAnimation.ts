import { useEffect } from 'react'
import {
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated'

const useCircularProgressAnimation = (
  circleLength: number,
  value: number = 0,
  minValue: number = 0,
  maxValue: number = 100,
) => {
  const progress = useSharedValue(0)

  const Value = (value - minValue) / (maxValue - minValue)
  useEffect(() => {
    progress.value = withTiming(Value, { duration: 1000 })
  }, [progress, Value])

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: circleLength * (1 - progress.value),
  }))

  const progressText = useDerivedValue(
    () => `${Math.floor(progress.value * 100)}`,
  )

  return { animatedProps, progressText }
}

export default useCircularProgressAnimation
