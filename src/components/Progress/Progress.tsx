import React, { FC, useState } from 'react'
import { LayoutChangeEvent } from 'react-native'
import {
  ProgressLabels,
  ProgressLabel,
  ProgressValueLabel,
  ProgressWrapper,
  Track,
  Progression,
} from './Progress.styled'

import { ProgressProps } from './Progress.types'
import { ProgressContext } from './hooks/useProgressContext'
import { useProgressProps } from './hooks/useProgressProps'
import { useProgressAnimation } from './hooks/useProgressAnimation'

const Progress: FC<ProgressProps> = ({
  label,
  value,
  valueLabel,
  ...props
}) => {
  const [trackWidth, setTrackWidth] = useState(0)
  const progressProps = useProgressProps(props)
  const { minValue, maxValue, showValueLabel } = progressProps
  const { progress, animatedProgressStyle } = useProgressAnimation(
    minValue,
    maxValue,
    value,
    trackWidth,
  )

  const onLayout = (e: LayoutChangeEvent) => {
    setTrackWidth(e.nativeEvent.layout.width)
  }

  return (
    <ProgressContext.Provider value={progressProps}>
      <ProgressWrapper>
        <ProgressLabels>
          {label && <ProgressLabel>{label}</ProgressLabel>}
          {showValueLabel && <ProgressValueLabel text={progress} />}
        </ProgressLabels>
        <Track onLayout={onLayout}>
          <Progression style={animatedProgressStyle} />
        </Track>
      </ProgressWrapper>
    </ProgressContext.Provider>
  )
}

export default Progress
