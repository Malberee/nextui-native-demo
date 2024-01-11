import { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { getSize } from '../../../utils/getSize'
import { paddings } from '../Input.constants'
import { useInputContext } from './useInputContext'

const useInputAnimation = (shouldChangeLabelPosition: boolean) => {
  const { size } = useInputContext()
  const paddingTop = getSize(paddings, size)

  const animatedLabelStyles = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      left: 12,
      fontSize: withTiming(shouldChangeLabelPosition ? 12 : 16, {
        duration: 300,
      }),
      lineHeight: withTiming(shouldChangeLabelPosition ? 12 : 18),
      paddingTop: withTiming(shouldChangeLabelPosition ? paddingTop : 0),
      top: withTiming(shouldChangeLabelPosition ? 0 : '50%'),
      zIndex: 20,
    }
  })

  return { animatedLabelStyles }
}

export default useInputAnimation
