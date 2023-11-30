import styled, { css } from 'styled-components/native'
import useColors from '../ThemeProvider/hooks/useColors'
import { getRadius, getTextColor } from '../../utils'
import { useButtonContext } from './hooks/useButtonContext'
import { ColorName, VariantName } from '../../types'
import { radii } from './Button.constants'

const getVariantStyles = (variant: VariantName, color: ColorName) => {
  const { colors } = useColors()

  if (variant === 'solid') {
    return `
            background-color: ${colors[color]};
        `
  }
  if (variant === 'flat') {
    return `
            background-color: ${colors[color]}25;
        `
  }
  if (variant === 'faded') {
    return `
            background-color: ${colors.default100};
            border-color: ${colors.default200};
            border-width: 2px;
        `
  }
}

export const ButtonWrapper = styled.TouchableOpacity(() => {
  const {
    radius = 'md',
    color = 'default',
    size = 'md',
    variant = 'solid',
    fullWidth,
    isDisabled,
  } = useButtonContext()
  const { colors } = useColors()

  return css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: content-box;

    height: ${size === 'sm' ? 32 : size === 'md' ? 40 : 48}px;
    padding: 0 ${size === 'sm' ? 12 : size === 'md' ? 16 : 24}px;

    ${getVariantStyles(variant, color)}
    border-radius: ${getRadius(radii, radius)}px;

    opacity: ${isDisabled ? 0.5 : 1};
  `
})

export const ButtonText = styled.Text(() => {
  const { color = 'default', variant = 'solid' } = useButtonContext()

  const { colors } = useColors()

  return css`
    color: ${variant === 'flat' ? colors[color] : getTextColor(color)};
  `
})
