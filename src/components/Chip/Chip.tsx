import React, { FC } from 'react'
import { Pressable } from 'react-native'
import { ChipWrapper, ChipContent, ChipDot } from './Chip.styled'
import { CloseCircle } from 'nextui-native-icons'

import { ChipProps } from './Chip.types'
import { ChipContext } from './hooks/useChipContext'
import { useChipProps } from './hooks/useChipProps'
import { getShadow } from '../../utils/getShadow'
import { useColors } from '../ThemeProvider'
import { getSize } from '../../utils/getSize'
import { sizes } from './Chip.constants'
import { useTextColor } from '../../hooks/useTextColor'

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

  const textColor = useTextColor(color)
  const closeIconColor =
    variant === 'solid' || variant === 'shadow' ? textColor : colors[color]

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
            <CloseCircle
              width={getSize(sizes, size) - 10}
              height={getSize(sizes, size) - 10}
              color={closeIconColor}
            />
          </Pressable>
        ) : (
          endContent
        )}
      </ChipWrapper>
    </ChipContext.Provider>
  )
}

export default Chip
