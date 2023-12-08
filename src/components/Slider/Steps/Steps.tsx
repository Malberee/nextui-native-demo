import React, { FC } from 'react'
import { StepsWrapper, Step } from './Steps.styled'

import { StepsProps } from './Steps.types'

const Steps: FC<StepsProps> = ({ steps, trackWidth, isReached }) => {
  const dots = Array(Math.round(steps)).fill(true)

  return (
    <StepsWrapper trackWidth={trackWidth}>
      {dots.map((_, index) => (
        <Step isReached={isReached} key={index} />
      ))}
    </StepsWrapper>
  )
}

export default Steps
