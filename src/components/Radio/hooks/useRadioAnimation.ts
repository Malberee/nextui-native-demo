import {
  useAnimatedStyle,
  withTiming,
  useDerivedValue,
  interpolateColor,
  useSharedValue,
} from 'react-native-reanimated'
import useColors from '../../ThemeProvider/hooks/useColors'
import { ColorName } from '../../../types'
import { Gesture } from 'react-native-gesture-handler'

export const useRadioAnimation = (
  isChecked: boolean,
  color: ColorName,
  isInvalid: boolean,
  isDisabled: boolean,
) => {
  const { colors } = useColors()

  const radioScale = useSharedValue(1)
  const dotScale = useDerivedValue(() => {
    return withTiming(isChecked ? 1 : 0, { duration: 100 })
  })
  const progress = useDerivedValue(() => {
    return withTiming(isChecked || isInvalid ? 10 : 0, { duration: 100 })
  })

  const radioOutlineStyle = useAnimatedStyle(() => {
    const borderColor = interpolateColor(
      progress.value,
      [0, 10],
      [colors.default, colors[color]],
    )

    return { borderColor, transform: [{ scale: radioScale.value }] }
  })
  const radioDotStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: dotScale.value,
        },
      ],
    }
  })

  const pan = Gesture.Pan()
    .onTouchesDown(() => {
      if (!isDisabled) {
        radioScale.value = withTiming(0.93, { duration: 150 })
      }
    })
    .onTouchesUp(() => {
      if (!isDisabled) {
        radioScale.value = withTiming(1, { duration: 150 })
      }
    })

  return {
    radioOutlineStyle,
    radioDotStyle,
    pan,
  }
}
