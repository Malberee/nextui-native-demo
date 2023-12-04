import { useEffect } from 'react'
import {
  interpolateColor,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  useDerivedValue,
} from 'react-native-reanimated'
import useColors from '../../ThemeProvider/hooks/useColors'
import { ColorName, SizeName } from '../../../types'
import { getSize } from '../../../utils/getSize'
import { thumbSizes } from '../Switch.constants'
import { Gesture } from 'react-native-gesture-handler'

export const useSwitchAnimation = (
  isChecked: boolean,
  color: ColorName,
  size: Extract<SizeName, 'sm' | 'md' | 'lg'>,
) => {
  const { colors } = useColors()
  const thumbSize = getSize(thumbSizes, size) + 4

  const progress = useDerivedValue(() => {
    return withTiming(isChecked ? 10 : 0)
  })
  const thumbPosition = useDerivedValue(() => {
    return withTiming(isChecked ? thumbSize : 4, { duration: 150 })
  })
  const startContentPosition = useDerivedValue(() => {
    return withTiming(!isChecked ? -15 : 2, { duration: 150 })
  })
  const startContentScale = useDerivedValue(() => {
    return withTiming(!isChecked ? 0 : 1, { duration: 250 })
  })
  const endContentPosition = useDerivedValue(() => {
    return withTiming(isChecked ? 15 : -2, { duration: 150 })
  })
  const endContentScale = useDerivedValue(() => {
    return withTiming(isChecked ? 0 : 1, { duration: 250 })
  })
  const pressed = useSharedValue(false)
  const stretch = useSharedValue(1)
  const pan = Gesture.Pan()
    .onBegin(() => {
      pressed.value = true
      stretch.value = withTiming(thumbSize + 10, { duration: 150 })
    })
    .onFinalize(() => {
      pressed.value = false
      stretch.value = withTiming(thumbSize, { duration: 150 })
    })

  const backgroundStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 10],
      [colors.content3, colors[color]],
    )

    return {
      backgroundColor,
    }
  })

  const thumbStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: thumbPosition.value,
        },
      ],
    }
  })

  const startContentStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: startContentPosition.value,
        },
        { scale: startContentScale.value },
      ],
    }
  })
  const endContentStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: endContentPosition.value,
        },
        { scale: endContentScale.value },
      ],
    }
  })

  return {
    backgroundStyle,
    thumbStyle,
    endContentStyle,
    startContentStyle,
    pan,
  }
}