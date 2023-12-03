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

export const useSwitchAnimation = (
  isChecked: boolean,
  color: ColorName,
  size: Extract<SizeName, 'sm' | 'md' | 'lg'>,
) => {
  const { colors } = useColors()

  const thumbSize = getSize(thumbSizes, size)

  const progress = useDerivedValue(() => {
    return withTiming(isChecked ? thumbSize : 0)
  })

  const switchTranslate = useSharedValue(0)

  const backgroundColorStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, thumbSize],
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
          translateX: withSpring(switchTranslate.value, {
            mass: 1,
            damping: 25,
            stiffness: 120,
            overshootClamping: false,
            restSpeedThreshold: 0.001,
            restDisplacementThreshold: 0.001,
          }),
        },
      ],
    }
  })

  useEffect(() => {
    if (isChecked) {
      switchTranslate.value = thumbSize + 4
    } else {
      switchTranslate.value = 4
    }
  }, [isChecked])

  return { backgroundColorStyle, thumbStyle }
}
