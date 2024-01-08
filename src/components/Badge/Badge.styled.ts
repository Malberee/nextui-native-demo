import styled, { css } from 'styled-components/native'
import { useBadgeContext } from './hooks/useBadgeContext'
import { getPlacement } from './utils'
import { getSize } from '../../utils/getSize'
import { sizes } from './Badge.constants'
import useColors from '../ThemeProvider/hooks/useColors'
import { useVariantStyles } from '../../hooks/useVariantStyles'
import { useTextColor } from '../../hooks/useTextColor'
import Animated from 'react-native-reanimated'

export const BadgeWrapper = styled(Animated.View)(() => {
  const { placement, width, shape, isDisabled } = useBadgeContext()

  return css`
    position: absolute;
    ${getPlacement(placement, width, shape)}

    opacity: ${isDisabled ? 0.5 : 1};
  `
})

export const BadgeOutline = styled.View(() => {
  const { size = 'md', isDot, width } = useBadgeContext()
  const { colors } = useColors()

  return css`
    position: absolute;
    top: -2px;
    left: -2px;

    width: ${width + 4}px;
    height: ${isDot ? 14 : getSize(sizes, size) + 4}px;

    background-color: ${colors.background};
    border-radius: 9999px;
    z-index: -1;
  `
})

export const BadgeInner = styled.View(() => {
  const { variant, color, size, isDot } = useBadgeContext()

  return css`
    position: relative;

    min-width: ${isDot ? 10 : getSize(sizes, size)}px;
    height: ${isDot ? 10 : getSize(sizes, size)}px;

    border-radius: 9999px;
    ${useVariantStyles(variant, color)}
  `
})
export const BadgeContent = styled.Text(() => {
  const { size, color } = useBadgeContext()

  return css`
    padding: 0 4px;
    text-align: center;

    font-size: ${size === 'sm' ? 12 : 14}px;
    line-height: 18px;

    color: ${useTextColor(color)};
  `
})
