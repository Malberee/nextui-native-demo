import React, { FC } from 'react'
import { ProgressWrapper, Track, Progression } from './Progress.styled'

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
        <Track>
          <Progression />
        </Track>
      </ProgressWrapper>
    </ProgressContext.Provider>
  )
}

export default Progress
