import { css } from 'styled-components'
import styled from 'styled-components/native'
import useColors from '../ThemeProvider/hooks/useColors'

export const InputWrapper = styled.View(() => {
  return css`
    width: 100%;
  `
})

export const InputInner = styled.View(() => {
  return css`
    width: 100%;
  `
})

export const StyledTextInput = styled.TextInput(() => {
  const { radius } = useInputContext()
  const { colors } = useColors()

  return css`
    width: 100%;
    background-color: ${colors.default100};
  `
})

export const Placeholder = styled.Text(() => {
  return css``
})
