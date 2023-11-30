import React, { FC } from 'react'
import { ButtonGroupWrapper } from './ButtonGroup.styled'

import { ButtonGroupProps } from './ButtonGroup.types'
import { ButtonGroupContext } from './hooks/useButtonGroupContext'

const ButtonGroup: FC<ButtonGroupProps> = ({children, ...props}) => {
  return (
    <ButtonGroupContext.Provider value={props}>
      <ButtonGroupWrapper>{children}</ButtonGroupWrapper>
    </ButtonGroupContext.Provider>
  )
}

export default ButtonGroup
