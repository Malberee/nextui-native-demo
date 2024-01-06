import { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { getSize } from '../../../utils/getSize'
import { paddings } from '../Input.constants'
import { useInputContext } from './useInputContext'

const useInputAnimation = (shouldChangeLabelPosition: boolean) => {
  const { size } = useInputContext()
  const paddingTop = getSize(paddings, size)

  const animatedLabelStyles = useAnimatedStyle(() => ({
    fontSize: withTiming(shouldChangeLabelPosition ? 12 : 16, {
      duration: 300,
    }),
    top: withTiming(shouldChangeLabelPosition ? -paddingTop : 0),
  }))

  return { animatedLabelStyles }
}

export default useInputAnimation
