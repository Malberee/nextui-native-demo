import { useAnimatedStyle, withTiming } from 'react-native-reanimated'

const useBadgeAnimation = (isInvisible: boolean) => {
  const animatedBadgeStyles = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(isInvisible ? 0 : 1, { duration: 300 }) }],
  }))

  return { animatedBadgeStyles }
}

export default useBadgeAnimation
