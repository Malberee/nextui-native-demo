import styled, { css } from 'styled-components/native'
import { AvatarGroupProps } from './AvatarGroup.types'

export const AvatarGroupWrapper = styled.View<
  Pick<AvatarGroupProps, 'max' | 'total' | 'isGrid'>
>(({ isGrid }) => {
  return css`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 16px;
    width: 100px;
  `
})
