import React, { FC } from 'react'
import { Pressable } from 'react-native'
import { ChipWrapper, ChipContent, ChipDot } from './Chip.styled'
// @ts-ignore
import Icon from 'react-native-vector-icons/Ionicons'

import { ChipProps } from './Chip.types'
import { ChipContext } from './hooks/useChipContext'
import { useChipProps } from './hooks/useChipProps'
import { getShadow } from '../../utils/getShadow'
import useColors from '../ThemeProvider/hooks/useColors'
import { getSize } from '../../utils/getSize'
import { sizes } from './Chip.constants'

const Chip: FC<ChipProps> = ({
  children,
  startContent,
  endContent,
  avatar,
  onClose,
  ...props
}) => {
  const { size, variant, color, ...chipProps } = useChipProps(props)
  const { colors } = useColors()

  return (
    <ChipContext.Provider value={{ size, variant, color, ...chipProps }}>
      <ChipWrapper style={{ ...getShadow(variant, colors, color) }}>
        {variant === 'dot' && <ChipDot />}
        {avatar
          ? React.cloneElement(avatar as React.ReactElement, {
              size: getSize(sizes, size) - (size === 'lg' ? 16 : 8),
            })
          : startContent}
        <ChipContent>{children}</ChipContent>
        {endContent && onClose ? (
          <Pressable onPress={onClose}>
            {React.cloneElement(endContent as React.ReactElement)}
          </Pressable>
        ) : onClose ? (
          <Pressable onPress={onClose}>
            <Icon name="close" size={15} color="white" />
          </Pressable>
        ) : (
          endContent
        )}
      </ChipWrapper>
    </ChipContext.Provider>
  )
}

export default Chip
