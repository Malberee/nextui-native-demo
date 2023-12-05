import {
  useAnimatedStyle,
  withTiming,
  useDerivedValue,
  interpolateColor,
} from 'react-native-reanimated'
import useColors from '../../ThemeProvider/hooks/useColors'
import { ColorName } from '../../../types'

export const useRadioAnimation = (isChecked: boolean, color: ColorName, isInvalid: boolean) => {
  const { colors } = useColors()

  const scale = useDerivedValue(() => {
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

    return { borderColor }
  })

  const radioDotStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: scale.value,
        },
      ],
    }
  })

  return {
    radioOutlineStyle,
    radioDotStyle,
  }
}
