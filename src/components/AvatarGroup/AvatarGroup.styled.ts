import styled, { css } from 'styled-components/native'

export const AvatarGroupWrapper = styled.View``

export const AvatarWrapper = styled.View<{ index: number }>(({ index }) => {
  return css`
    position: relative;
  `
})
