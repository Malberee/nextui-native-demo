import styled, { css } from 'styled-components/native'
import { AvatarGroupProps } from './AvatarGroup.types'

export const AvatarGroupWrapper = styled.View<
  Pick<AvatarGroupProps, 'max' | 'total' | 'isGrid'>
>(({ isGrid }) => {
  return css`
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: ${isGrid ? 'wrap' : 'nowrap'};
    flex-direction: row;
    gap: 16px;
  `
})
