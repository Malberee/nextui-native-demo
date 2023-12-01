import React, { FC } from 'react'
import { ChipWrapper, ChipContent } from './Chip.styled'

import { ChipProps } from './Chip.types'
import { ChipContext } from './hooks/useChipContext'
import { useChipProps } from './hooks/useChipProps'

const Chip: FC<ChipProps> = ({
  children,
  startContent,
  endContent,
  onClose,
  ...props
}) => {
  const chipProps = useChipProps(props)

  return (
    <ChipContext.Provider value={chipProps}>
      <ChipWrapper>
        {startContent}
        <ChipContent>{children}</ChipContent>
        {endContent &&
          React.cloneElement(endContent as React.ReactElement, {
            onPress: onClose,
          })}
      </ChipWrapper>
    </ChipContext.Provider>
  )
}

export default Chip
