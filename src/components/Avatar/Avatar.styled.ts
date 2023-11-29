import styled, { css } from 'styled-components/native'
import { useAvatarContext } from './hooks/useAvatarContext'
import { getColor, getRadius, getSize } from '../../utils'
import { radii, sizes } from './Avatar.constants'

export const AvatarWrapper = styled.View(() => {
  const { radius = 'full', size = 'md', isDisabled } = useAvatarContext()

  return css`
    height: ${getSize(sizes, size)}px;
    width: ${getSize(sizes, size)}px;
    opacity: ${isDisabled ? 0.5 : 1};
    background-color: ${getColor('default')};
    border-radius: ${getRadius(radii, radius)}px;
  `
})

export const AvatarInner = styled.View(() => {
  const {
    color = 'default',
    radius = 'full',
    isDisabled,
    source,
  } = useAvatarContext()

  return css`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 100%;

    background-color: ${isDisabled && source ? 'transparent' : getColor(color)};
    border-radius: ${getRadius(radii, radius)}px;
  `
})

export const AvatarImage = styled.Image(() => {
  const { radius = 'full' } = useAvatarContext()

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
  const { color = 'default', radius = 'full', size = 'md' } = useAvatarContext()

  return css`
    position: absolute;
    top: -4px;
    left: -4px;

    width: ${getSize(sizes, size) + 8}px;
    height: ${getSize(sizes, size) + 8}px;

    background-color: #ffffff;
    border-color: ${getColor(color)};
    border-width: 2px;
    border-radius: ${getRadius(radii, radius) + 4}px;
    z-index: -1;
  `
})
