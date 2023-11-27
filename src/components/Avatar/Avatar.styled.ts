import styled, { css } from 'styled-components/native'
import { AvatarWrapperProps, AvatarProps, Radius, Size } from './Avatar.types'
import { sizes, radii } from './Avatar.constants'
import { palette } from '../../theme'
import { ColorName } from '../../types'
import { useAvatar } from './Avatar.context'
import { useAvatarGroup } from '../AvatarGroup/AvatarGroup.context'

const getRadius = (radius: Radius) => {
  if (typeof radius === 'string') {
    return radii[radius]
  }
  return radius
}

const getColor = (color: ColorName) => {
  return palette[color] || palette['default']
}

const getSize = (size: Size) => {
  if (typeof size === 'string') {
    return sizes[size]
  }
  return size
}

export const AvatarWrapper = styled.View(() => {
  const props = { ...useAvatarGroup(), ...useAvatar() }
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
    width: ${getSize(size)}px;
    height: ${getSize(size)}px;
    border-radius: ${getRadius(radius) - 2}px;

    opacity: ${isDisabled ? 0.5 : 1};
    background-color: ${getColor('default')};

    left: ${!isGrid && isInGroup && index !== 0 && index ? -24 * index : 0}px;
  `
})

export const AvatarInner = styled.View(() => {
  const props = { ...useAvatarGroup(), ...useAvatar() }
  const { radius = 'full', color = 'default', isDisabled } = props

  return css`
    height: 100%;
    width: 100%;
    border-radius: ${getRadius(radius)}px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${isDisabled ? 'transparent' : getColor(color)};
  `
})

export const AvatarImage = styled.Image(() => {
  const props = { ...useAvatarGroup(), ...useAvatar() }
  const { radius = 'full' } = props

  return css`
    width: 100%;
    height: 100%;
    border-radius: ${getRadius(radius) - 2}px;
  `
})

export const AvatarOutline = styled.View(() => {
  const props = { ...useAvatarGroup(), ...useAvatar() }
  const { color = 'default', radius = 'full', size = 'md' } = props

  return css`
    position: absolute;
    left: -4px;
    bottom: -4px;

    width: ${getSize(size) + 8}px;
    height: ${getSize(size) + 8}px;

    border-color: ${getColor(color)};
    border-width: 2px;
    border-radius: ${getRadius(radius) + 2}px;
    z-index: -1;

    background-color: #ffffff;
  `
})
