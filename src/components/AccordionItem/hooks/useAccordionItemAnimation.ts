import { View } from 'react-native'
import {
  measure,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

const useAccordionItemAnimation = (isOpen: boolean) => {
  const animatedRef = useAnimatedRef<View>()
  const height = useSharedValue(0)
  const animatedContentStyles = useAnimatedStyle(() => ({
    height: withTiming(height.value, { duration: 150 }),
  }))

  const setHeight = () => {
    'worklet'

    height.value = !height.value ? Number(measure(animatedRef).height ?? 0) : 0

    console.log(!height.value ? Number(measure(animatedRef).height ?? 0) : 0)
  }

  const animatedIndicatorStyles = useAnimatedStyle(() => ({
    transform: [
      { rotate: withTiming(isOpen ? '-90deg' : '0deg', { duration: 150 }) },
    ],
  }))

  return {
    animatedIndicatorStyles,
    setHeight,
    animatedRef,
    animatedContentStyles,
  }
}

export default useAccordionItemAnimation
