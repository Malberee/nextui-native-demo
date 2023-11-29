import styled, { css } from 'styled-components/native'
import {
  AvatarGroupWrapperProps,
  AvatarWrapperProps,
} from './AvatarGroup.types'

export const AvatarGroupWrapper = styled.View<AvatarGroupWrapperProps>(
  ({ isGrid }) => {
    return css`
      display: flex;
      flex-direction: row;
      flex-wrap: ${isGrid ? 'wrap' : 'nowrap'};
      gap: 16px;
    `
  },
)

export const AvatarWrapper = styled.View<AvatarWrapperProps>(
  ({ index, isGrid }) => {
    return css`
      position: relative;
      left: ${!isGrid && index ? -24 * index : 0}px;
    `
  },
)
