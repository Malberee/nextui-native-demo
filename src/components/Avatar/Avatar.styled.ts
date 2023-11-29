import styled, { css } from 'styled-components/native'
import { useAvatarContext } from './hooks/useAvatarContext'
import { sizes, radii } from './Avatar.constants'
import { getSize, getRadius, getColor } from '../../utils'

export const AvatarWrapper = styled.View(() => {
  const props = useAvatarContext()
  const {
    radius = 'full',
    size = 'md',
    isDisabled,
    isInGroup,
    isGrid,
    index,
  } = props

  return css`
    position: relative;
    width: ${getSize(sizes, size)}px;
    height: ${getSize(sizes, size)}px;
    border-radius: ${getRadius(radii, radius) - 2}px;

    opacity: ${isDisabled ? 0.5 : 1};
    background-color: ${getColor('default')};

    left: ${!isGrid && isInGroup && index ? -24 * index : 0}px;
  `
})

export const AvatarInner = styled.View(() => {
  const props = useAvatarContext()
  const { radius = 'full', color = 'default', isDisabled, source } = props

  return css`
    height: 100%;
    width: 100%;
    border-radius: ${getRadius(radii, radius) - 4}px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${isDisabled && source ? 'transparent' : getColor(color)};
  `
})

export const AvatarImage = styled.Image(() => {
  const props = useAvatarContext()
  const { radius = 'full' } = props

  return css`
    width: 100%;
    height: 100%;
    border-radius: ${getRadius(radii, radius) - 4}px;
  `
})

export const AvatarOutline = styled.View(() => {
  const props = useAvatarContext()
  const { color = 'default', radius = 'full', size = 'md' } = props

  return css`
    position: absolute;
    left: -4px;
    bottom: -4px;

    width: ${getSize(sizes, size) + 8}px;
    height: ${getSize(sizes, size) + 8}px;

    border-color: ${getColor(color)};
    border-width: 2px;
    border-radius: ${getRadius(radii, radius)}px;
    z-index: -1;

    background-color: #ffffff;
  `
})

export const Name = styled.Text`
  color: #ffffff;
`
