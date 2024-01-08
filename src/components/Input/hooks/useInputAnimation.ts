import { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { getSize } from '../../../utils/getSize'
import { paddings } from '../Input.constants'
import { useInputContext } from './useInputContext'

const useInputAnimation = (shouldChangeLabelPosition: boolean) => {
  const { size } = useInputContext()
  const paddingTop = getSize(paddings, size)

  const animatedLabelStyles = useAnimatedStyle(() => {
    return {
      fontSize: withTiming(shouldChangeLabelPosition ? 12 : 16, {
        duration: 300,
      }),
      top: withTiming(shouldChangeLabelPosition ? paddingTop : '50%'),
    }
  })

  return { animatedLabelStyles }
}

export default useInputAnimation
