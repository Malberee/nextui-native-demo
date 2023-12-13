import styled, { css } from 'styled-components/native'
import useColors from '../ThemeProvider/hooks/useColors'
import { useChipContext } from './hooks/useChipContext'
import { getRadius } from '../../utils/getRadius'
import { getSize } from '../../utils/getSize'
import { useTextColor } from '../../hooks/useTextColor'
import { radii, sizes } from './Chip.constants'
import { useVariantStyles } from '../../hooks/useVariantStyles'

export const ChipWrapper = styled.View(() => {
  const { size, radius, color, variant, isDisabled } = useChipContext()

  return css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: ${getSize(sizes, size)}px;
    padding: 0 ${size === 'lg' ? 8 : 4}px;

    border-radius: ${getRadius(radii, radius)}px;
    ${useVariantStyles(variant, color)}

    opacity: ${isDisabled ? 0.5 : 1};
  `
})

export const ChipContent = styled.Text(() => {
  const { size, color, variant } = useChipContext()
  const { colors } = useColors()

  return css`
    padding: 0 ${size === 'sm' ? 4 : 8}px;
    font-size: ${size === 'lg' ? 16 : size === 'md' ? 14 : 12}px;
    color: ${variant === 'solid' || variant === 'shadow'
      ? useTextColor(color)
      : colors[color]};
  `
})

export const ChipDot = styled.View(() => {
  const { color } = useChipContext()
  const { colors } = useColors()

  return css`
    width: 8px;
    height: 8px;
    margin-left: 4px;
    background-color: ${colors[color]};
    border-radius: 9999px;
  `
})
