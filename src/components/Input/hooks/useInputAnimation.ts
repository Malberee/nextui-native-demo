import { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { getSize } from '../../../utils/getSize'
import { paddings } from '../Input.constants'
import { InputContextProps } from '../Input.types'

const useInputAnimation = (
  shouldChangeLabelPosition: boolean,
  size: InputContextProps['size'],
) => {
  const paddingTop = getSize(paddings, size)

  const lineHeightBySize = size === 'lg' ? 20 : size === 'md' ? 18 : 16

  const animatedLabelStyles = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      left: 12,
      fontSize: withTiming(shouldChangeLabelPosition ? 12 : 16, {
        duration: 300,
      }),
      lineHeight: withTiming(shouldChangeLabelPosition ? 12 : lineHeightBySize),
      paddingTop: withTiming(shouldChangeLabelPosition ? paddingTop : 0),
      top: withTiming(shouldChangeLabelPosition ? 0 : '50%'),
    }
  })

  return { animatedLabelStyles }
}

export default useInputAnimation
