import styled, { css } from 'styled-components/native'
import useColors from '../ThemeProvider/hooks/useColors'
import { useChipContext } from './hooks/useChipContext'
import { getRadius, getSize, getTextColor } from '../../utils'
import { radii, sizes } from './Chip.constants'

export const ChipWrapper = styled.View(() => {
  const { size, radius, color, variant, isDisabled } = useChipContext()
  const { colors } = useColors()

  return css`
    display: flex;
    justify-content: center;

    height: ${getSize(sizes, size)}px;
    padding: 0 ${size === 'lg' ? 8 : 4}px;

    background-color: ${colors[color]};
    border-radius: ${getRadius(radii, radius)}px;

    opacity: ${isDisabled ? 0.5 : 1};
  `
})

export const ChipContent = styled.Text(() => {
  const { size, color } = useChipContext()

  return css`
    padding: 0 ${size === 'lg' ? 8 : 4}px;
    color: ${getTextColor(color)};
  `
})
