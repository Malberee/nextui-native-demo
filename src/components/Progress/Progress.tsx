import React, { FC } from 'react'
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

const Progress: FC<ProgressProps> = ({ label, valueLabel, ...props }) => {
  const progressProps = useProgressProps(props)
  const { minValue, maxValue, value, showValueLabel } = progressProps
  const { animatedProgressStyle } = useProgressAnimation(
    minValue,
    maxValue,
    value,
  )

  return (
    <ProgressContext.Provider value={progressProps}>
      <ProgressWrapper>
        <ProgressLabels>
          <ProgressLabel>{label}</ProgressLabel>
          {showValueLabel && (
            <ProgressValueLabel>{valueLabel}</ProgressValueLabel>
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
