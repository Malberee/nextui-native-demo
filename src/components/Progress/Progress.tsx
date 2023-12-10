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

const Progress: FC<ProgressProps> = ({
  label,
  value,
  valueLabel,
  minValue,
  maxValue,
  isIndeterminate,
  ...props
}) => {
  const progressProps = useProgressProps(props)

  return (
    <ProgressContext.Provider value={progressProps}>
      <ProgressWrapper>
        <ProgressLabels>
          <ProgressLabel>Loading...</ProgressLabel>
          <ProgressValueLabel>50%</ProgressValueLabel>
        </ProgressLabels>
        <Track>
          <Progression />
        </Track>
      </ProgressWrapper>
    </ProgressContext.Provider>
  )
}

export default Progress
