import styled, { css } from 'styled-components/native'
import { AvatarWrapperProps, AvatarProps, Radius } from './Avatar.types'
import { sizes, radii } from './Avatar.constants'
import { palette } from '../../theme'

const getRadius = (radius: Radius) => {
  if (typeof radius === 'string') {
    return radii[radius]
  }
  return radius
}

export const AvatarWrapper = styled.View<AvatarWrapperProps>(
  ({
    color = 'default',
    radius = 'full',
    size = 'md',
    isBordered,
    isDisabled,
  }) => {
    const getSize = () => {
      if (typeof size === 'string') {
        return sizes[size]
      }
      return size
    }

    const getColor = () => {
      return palette[color] || palette['default']
    }

    return css`
      width: ${getSize()}px;
      height: ${getSize()}px;
      padding: ${isBordered ? 2 : 0}px;

      border-radius: ${getRadius(radius)}px;
      border-width: ${isBordered ? 2 : 0}px;
      border-color: ${getColor()};
      opacity: ${isDisabled ? 0.5 : 1};

      overflow: hidden;
    `
  },
)

export const AvatarInner = styled.View<Pick<AvatarProps, 'radius'>>(
  ({ radius = 'full' }) => {
    return css`
      display: flex;
      justify-content: center;
      align-items: center;

      width: 100%;
      height: 100%;

      border-radius: ${getRadius(radius)}px;

      background-color: ${palette['default']};
    `
  },
)

export const AvatarImage = styled.Image<Pick<AvatarProps, 'radius'>>(
  ({ radius = 'full' }) => {
    return css`
      width: 100%;
      height: 100%;

      border-radius: ${getRadius(radius)}px;
    `
  },
)
