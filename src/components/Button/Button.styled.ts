import styled, { css } from 'styled-components/native'
import { Animated, Pressable } from 'react-native'
import useColors from '../ThemeProvider/hooks/useColors'
import { getRadius, getTextColor } from '../../utils'
import { useButtonContext } from './hooks/useButtonContext'
import { ColorName, VariantName } from '../../types'
import { radii } from './Button.constants'

const getVariantStyles = (variant: VariantName, color: ColorName) => {
  const { colors } = useColors()

  switch (variant) {
    case 'flat':
      return `
            background-color: ${colors[color]}25;
        `
      break
    case 'faded':
      return `
            background-color: ${colors.default100};
            border-color: ${colors.default200};
            border-width: 2px;
        `
      break
    case 'bordered':
      return `
            border-color: ${colors[color]};
            border-width: 2px;
        `
      break
    case 'light':
      return
      break
    default:
      return `
            background-color: ${colors[color]};
        `
      break
  }
}

const getRadii = (
  isInGroup: boolean,
  isFirst: boolean,
  isLast: boolean,
  radius: number,
) => {
  if (isInGroup) {
    if (isFirst) {
      return `
        border-top-left-radius: ${radius}px;
        border-bottom-left-radius: ${radius}px;
      `
    }
    if (isLast) {
      return `
        border-top-right-radius: ${radius}px;
        border-bottom-right-radius: ${radius}px;
      `
    }
    return ''
  }
  return `border-radius: ${radius}px;`
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

export const ButtonWrapper = styled(AnimatedPressable)(() => {
  const {
    radius = 'md',
    color = 'default',
    size = 'md',
    variant = 'solid',
    fullWidth,
    isDisabled,
    isIconOnly,
    isInGroup = false,
    isFirst = false,
    isLast = false,
  } = useButtonContext()

  return css`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    flex-grow: ${isInGroup && fullWidth ? 1 : 0};
    gap: 8px;

    height: ${size === 'sm' ? 32 : size === 'md' ? 40 : 48}px;
    ${isIconOnly && `width: ${size === 'sm' ? 32 : size === 'md' ? 40 : 48}px`};
    min-width: ${!isInGroup && fullWidth ? '100%' : 'auto'};
    padding: 0
      ${isIconOnly ? 0 : size === 'sm' ? 12 : size === 'md' ? 16 : 24}px;

    ${getVariantStyles(variant, color)}
    ${getRadii(isInGroup, isFirst, isLast, getRadius(radii, radius))}

    opacity: ${isDisabled ? 0.5 : 1};
    overflow: hidden;
  `
})

export const ButtonContent = styled.Text(() => {
  const { color = 'default', variant = 'solid' } = useButtonContext()

  const { colors } = useColors()

  return css`
    color: ${variant === 'solid' || variant === 'shadow'
      ? getTextColor(color)
      : colors[color]};
  `
})
