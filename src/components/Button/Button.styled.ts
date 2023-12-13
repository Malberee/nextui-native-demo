import styled, { css } from 'styled-components/native'
import Animated from 'react-native-reanimated'
import useColors from '../ThemeProvider/hooks/useColors'
import { useTextColor } from '../../hooks/useTextColor'
import { getRadius } from '../../utils/getRadius'
import { useVariantStyles } from '../../hooks/useVariantStyles'
import { useButtonContext } from './hooks/useButtonContext'
import { radii } from './Button.constants'

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

export const ButtonWrapper = styled(Animated.View)(() => {
  const {
    radius,
    color,
    size,
    variant,
    fullWidth,
    isDisabled,
    isIconOnly,
    isInGroup,
    isFirst,
    isLast,
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

    ${useVariantStyles(variant, color)}
    ${getRadii(isInGroup, isFirst, isLast, getRadius(radii, radius))}

    opacity: ${isDisabled ? 0.5 : 1};
    overflow: hidden;
  `
})

export const ButtonContent = styled.Text(() => {
  const { color, variant } = useButtonContext()

  const { colors } = useColors()

  return css`
    color: ${variant === 'solid' || variant === 'shadow'
      ? useTextColor(color)
      : colors[color]};
  `
})
