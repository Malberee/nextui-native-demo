import styled, { css } from 'styled-components/native'
import { useAvatarContext } from './hooks/useAvatarContext'
import { getSize } from '../../utils/getSize'
import { getRadius } from '../../utils/getRadius'
import { radii, sizes } from './Avatar.constants'
import useColors from '../ThemeProvider/hooks/useColors'

export const AvatarWrapper = styled.View(() => {
  const { radius, size, isDisabled } = useAvatarContext()
  const { colors } = useColors()

  return css`
    height: ${getSize(sizes, size)}px;
    width: ${getSize(sizes, size)}px;
    opacity: ${isDisabled ? 0.5 : 1};
    background-color: ${colors.default};
    border-radius: ${getRadius(radii, radius)}px;
  `
})

export const AvatarInner = styled.View(() => {
  const { color, radius, isDisabled, source } = useAvatarContext()
  const { colors } = useColors()

  return css`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 100%;

    background-color: ${isDisabled && source ? 'transparent' : colors[color]};
    border-radius: ${getRadius(radii, radius)}px;
  `
})

export const AvatarImage = styled.Image(() => {
  const { radius } = useAvatarContext()

  return css`
    width: 100%;
    height: 100%;
    border-radius: ${getRadius(radii, radius)}px;
  `
})

export const Name = styled.Text(() => {
  return css``
})

export const AvatarOutline = styled.View(() => {
  const { color, radius, size } = useAvatarContext()
  const { colors } = useColors()

  return css`
    position: absolute;
    top: -4px;
    left: -4px;

    width: ${getSize(sizes, size) + 8}px;
    height: ${getSize(sizes, size) + 8}px;

    background-color: ${colors.background};
    border-color: ${colors[color]};
    border-width: 2px;
    border-radius: ${getRadius(radii, radius) + 4}px;
    z-index: -1;
  `
})
