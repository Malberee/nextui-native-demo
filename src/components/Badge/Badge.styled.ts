import styled, { css } from 'styled-components/native'
import { useBadgeContext } from './hooks/useBadgeContext'
import { getPlacement } from './utils'
import { getSize } from '../../utils'
import { sizes } from './Badge.constants'
import useColors from '../ThemeProvider/hooks/useColors'

export const BadgeWrapper = styled.View``

export const BadgeOutline = styled.View(() => {
  const {
    placement,
    width,
    shape,
    isOneChar,
    size,
    isDot,
    showOutline,
    isDisabled,
  } = useBadgeContext()

  return css`
    position: absolute;
    ${getPlacement(placement, width, shape)}
    ${isOneChar ? 'width:' : 'min-width:'} ${getSize(sizes, isDot ? 12 : size) +
    2}px;
    ${isOneChar ? 'height:' : 'min-height:'} ${getSize(
      sizes,
      isDot ? 12 : size,
    ) + 2}px;
    padding: 2px;
    background-color: ${showOutline ? '#ffffff' : 'transparent'};
    opacity: ${isDisabled ? 0.5 : 1};
    border-radius: 9999px;
  `
})

export const BadgeInner = styled.View(() => {
  const { color, variant } = useBadgeContext()
  const { colors } = useColors()

  return css`
    width: 100%;
    height: 100%;
    padding: 1px 5px 1px 5px;
    border-radius: 9999px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors[color]};
  `
})
export const BadgeContent = styled.Text(() => {
  const { size = 'md' } = useBadgeContext()
  return css`
    font-size: ${size === 'sm' ? 12 : 14}px;
    line-height: ${size === 'sm' ? 14 : 17}px;
    color: #ffffff;
  `
})
