import React, { Children, FC } from 'react'
import { ButtonGroupWrapper } from './ButtonGroup.styled'

import { ButtonGroupProps } from './ButtonGroup.types'
import { ButtonGroupContext } from './hooks/useButtonGroupContext'

const ButtonGroup: FC<ButtonGroupProps> = ({ children, ...props }) => {
  const arrayChildren = Children.toArray(children)

  return (
    <ButtonGroupContext.Provider value={props}>
      <ButtonGroupWrapper>
        {arrayChildren.map((child, index) =>
          React.cloneElement(child as React.ReactElement, {
            index,
            isFirst: index === 0,
            isLast: index === arrayChildren.length - 1,
          }),
        )}
      </ButtonGroupWrapper>
    </ButtonGroupContext.Provider>
  )
}

export default ButtonGroup
