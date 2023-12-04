import styled, { css } from 'styled-components/native'
import useColors from '../ThemeProvider/hooks/useColors'

export const RadioGroupWrapper = styled.View(() => {
  return css``
})

export const RadioGroupLabel = styled.Text(() => {
  const { colors } = useColors()

  return css`
    color: ${colors.foreground};
  `
})
