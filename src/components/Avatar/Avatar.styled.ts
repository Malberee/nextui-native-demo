import styled, { css } from 'styled-components/native'
import { AvatarWrapperProps, AvatarProps, Radius, Size } from './Avatar.types'
import { sizes, radii } from './Avatar.constants'
import { palette } from '../../theme'
import { ColorName } from '../../types'

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

export const AvatarWrapper = styled.View<AvatarWrapperProps>(
  ({ radius = 'full', size = 'md', isDisabled, isInGroup, index }) => {
    return css`
      position: relative;
      width: ${getSize(size)}px;
      height: ${getSize(size)}px;
      border-radius: ${getRadius(radius) - 2}px;

      display: flex;
      justify-content: center;
      align-items: center;

      opacity: ${isDisabled ? 0.5 : 1};
      background-color: ${getColor('default')};
      z-index: 1;

      left: ${isInGroup && index !== 0 ? -24 * index : 0}px;
    `
  },
)

export const AvatarImage = styled.Image<Pick<AvatarProps, 'radius'>>(
  ({ radius = 'full' }) => {
    return css`
      width: 100%;
      height: 100%;
      border-radius: ${getRadius(radius) - 2}px;
      z-index: 1;
    `
  },
)

export const AvatarOutline = styled.View<
  Pick<AvatarProps, 'color' | 'radius' | 'size'>
>(({ color = 'default', radius = 'full', size = 'md' }) => {
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
  `
})
