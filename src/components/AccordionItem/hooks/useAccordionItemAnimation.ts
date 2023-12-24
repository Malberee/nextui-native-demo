import { useAnimatedStyle, withTiming } from 'react-native-reanimated'

const useAccordionItemAnimation = (isOpen: boolean) => {
  const animatedIndicatorStyles = useAnimatedStyle(() => ({
    transform: [
      { rotate: withTiming(isOpen ? '-90deg' : '0deg', { duration: 150 }) },
    ],
  }))

  return { animatedIndicatorStyles }
}

export default useAccordionItemAnimation
