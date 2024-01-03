import { css } from 'styled-components'
import styled from 'styled-components/native'
import useColors from '../ThemeProvider/hooks/useColors'

export const CheckboxGroupWrapper = styled.View(() => {
  return css`
    width: 100%;
    /* margin-left: -8px; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `
})

export const Label = styled.Text(() => {
  return css``
})

export const Description = styled.Text(() => {
  return css``
})

export const ErrorMessage = styled.Text(() => {
  const { colors } = useColors()

  return css`
    color: ${colors.danger};
  `
})
