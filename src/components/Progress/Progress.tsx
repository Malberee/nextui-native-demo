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
  const progressProps = useProgressProps(props)
  const { minValue, maxValue, showValueLabel, isIndeterminate } = progressProps
  const { progress, animatedProgressStyle } = useProgressAnimation(
    minValue,
    maxValue,
    value,
    isIndeterminate,
  )

  return (
    <ProgressContext.Provider value={progressProps}>
      <ProgressWrapper>
        <ProgressLabels>
          {label && <ProgressLabel>{label}</ProgressLabel>}
          {showValueLabel && !isIndeterminate && (
            <ProgressValueLabel text={progress} />
          )}
        </ProgressLabels>
        <Track>
          <Progression style={animatedProgressStyle} />
        </Track>
      </ProgressWrapper>
    </ProgressContext.Provider>
  )
}

export default Progress
