import styled, { css } from 'styled-components/native'
import { useColors } from '../ThemeProvider'

export const UserWrapper = styled.View(() => {
  return css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  `
})

export const UserInner = styled.View(() => {
  return css``
})

export const UserName = styled.Text(() => {
  const { colors } = useColors()
  return css`
    color: ${colors.foreground};
    font-size: 14px;
  `
})

export const UserDescription = styled.Text(() => {
  const { colors } = useColors()
  return css`
    color: ${colors.default400};
    font-size: 12px;
  `
})
