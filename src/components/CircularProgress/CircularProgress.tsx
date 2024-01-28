import React, { FC } from 'react'
import { Svg, Circle } from 'react-native-svg'
import Animated from 'react-native-reanimated'
import {
  CircularProgressWrapper,
  ValueLabel,
  ValueLabelWrapper,
  LabelWrapper,
} from './CircularProgress.styled'

import { CircularProgressProps } from './CircularProgress.types'
import { useColors } from '../ThemeProvider'
import useCircularProgressProps from './hooks/useCircularProgressProps'
import { getSize } from '../../utils/getSize'
import { sizes } from './CircularProgress.constants'
import useCircularProgressAnimation from './hooks/useCircularProgressAnimation'
import { CircularProgressContext } from './hooks/useCircularProgressContext'

const CircularProgress: FC<CircularProgressProps> = ({
  label,
  value,
  ...props
}) => {
  const circularProgressProps = useCircularProgressProps(props)
  const {
    size,
    color,
    showValueLabel,
    isIndeterminate,
    formatOptions,
    maxValue,
    minValue,
  } = circularProgressProps
  const { colors } = useColors()

  const Size = getSize(sizes, size)
  const CIRCLE_LENGTH = Size * 0.9
  const R = CIRCLE_LENGTH / (2 * Math.PI)

  const { animatedCircleProps, animatedSvgStyles, progressText } =
    useCircularProgressAnimation(
      CIRCLE_LENGTH,
      formatOptions,
      isIndeterminate,
      minValue,
      maxValue,
      value,
    )

  const AnimatedCircle = Animated.createAnimatedComponent(Circle)
  const AnimatedSvg = Animated.createAnimatedComponent(Svg)

  return (
    <CircularProgressContext.Provider value={circularProgressProps}>
      <CircularProgressWrapper
        style={{
          width: Size,
          height: Size,
        }}
      >
        {showValueLabel && (
          <ValueLabelWrapper>
            <ValueLabel text={progressText} />
          </ValueLabelWrapper>
        )}
        <AnimatedSvg
          fill="none"
          viewBox="0 0 32 32"
          strokeWidth={size === 'sm' ? 2 : 3}
          style={animatedSvgStyles}
        >
          <Circle cx="50%" cy="50%" r={R} stroke={colors.default300} />
          <AnimatedCircle
            cx="50%"
            cy="50%"
            r={R}
            stroke={colors[color]}
            strokeLinecap="round"
            strokeDasharray={CIRCLE_LENGTH}
            animatedProps={animatedCircleProps}
          />
        </AnimatedSvg>
      </CircularProgressWrapper>
      <LabelWrapper>{label}</LabelWrapper>
    </CircularProgressContext.Provider>
  )
}

export default CircularProgress
