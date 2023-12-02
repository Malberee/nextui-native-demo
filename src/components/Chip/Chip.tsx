import React, { FC } from 'react'
import { ChipWrapper, ChipContent } from './Chip.styled'

import { ChipProps } from './Chip.types'
import { ChipContext } from './hooks/useChipContext'
import { useChipProps } from './hooks/useChipProps'
import { getShadow } from '../../utils/getShadow'
import useColors from '../ThemeProvider/hooks/useColors'

const Chip: FC<ChipProps> = ({
  children,
  startContent,
  endContent,
  onClose,
  ...props
}) => {
  const { variant, color, ...chipProps } = useChipProps(props)
  const { colors } = useColors()

  return (
    <ChipContext.Provider value={{ variant, color, ...chipProps }}>
      <ChipWrapper style={{ ...getShadow(variant, colors, color) }}>
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
