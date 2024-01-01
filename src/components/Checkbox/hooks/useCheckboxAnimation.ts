import { useAnimatedStyle, withTiming } from 'react-native-reanimated'

const useCheckboxAnimation = (isSelected: boolean) => {
  const animatedCheckboxStyles = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(isSelected ? 1 : 0, { duration: 250 }) }],
    opacity: withTiming(isSelected ? 1 : 0, { duration: 250 }),
  }))

  return { animatedCheckboxStyles }
}

export default useCheckboxAnimation
