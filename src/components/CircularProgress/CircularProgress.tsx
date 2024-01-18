import React, { FC } from 'react'
import { Svg, Circle } from 'react-native-svg'
import { View } from 'react-native'
import Animated from 'react-native-reanimated'
import {
  CircularProgressWrapper,
  ValueLabel,
  ValueLabelWrapper,
} from './CircularProgress.styled'

import { CircularProgressProps } from './CircularProgress.types'
import useColors from '../ThemeProvider/hooks/useColors'
import useCircularProgressProps from './hooks/useCircularProgressProps'
import { getSize } from '../../utils/getSize'
import { sizes } from './CircularProgress.constants'
import useCircularProgressAnimation from './hooks/useCircularProgressAnimation'

const CircularProgress: FC<CircularProgressProps> = ({
  label,
  value,
  valueLabel,
  ...props
}) => {
  const { size, color, showValueLabel, formatOptions, maxValue, minValue } =
    useCircularProgressProps(props)
  const { colors } = useColors()

  const Size = getSize(sizes, size)
  const CIRCLE_LENGTH = Size * 0.9
  const R = CIRCLE_LENGTH / (2 * Math.PI)

  const { animatedProps, progressText } = useCircularProgressAnimation(
    CIRCLE_LENGTH,
    formatOptions,
    minValue,
    maxValue,
    value,
  )

  const AnimatedCircle = Animated.createAnimatedComponent(Circle)

  return (
    <View
      style={{
        width: Size,
        height: Size,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {showValueLabel && (
        <ValueLabelWrapper>
          <ValueLabel text={progressText} />
        </ValueLabelWrapper>
      )}
      <Svg fill="none" viewBox="0 0 32 32" strokeWidth={size === 'sm' ? 2 : 3}>
        <Circle cx="50%" cy="50%" r={R} stroke={colors.default300} />
        <AnimatedCircle
          cx="50%"
          cy="50%"
          r={R}
          stroke={colors[color]}
          strokeLinecap="round"
          strokeDasharray={CIRCLE_LENGTH}
          animatedProps={animatedProps}
        />
      </Svg>
    </View>
  )
}

export default CircularProgress
