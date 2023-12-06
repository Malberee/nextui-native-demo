import styled, { css } from 'styled-components/native'
import useColors from '../ThemeProvider/hooks/useColors'
import { RadioGroupProps } from './RadioGroup.types'

export const RadioGroupWrapper = styled.View``

export const RadioList = styled.View<Pick<RadioGroupProps, 'orientation'>>(
  ({ orientation }) => {
    return css`
      display: flex;
      flex-direction: ${orientation === 'horizontal' ? 'row' : 'column'};
      flex-wrap: wrap;
    `
  },
)

export const RadioGroupLabel = styled.Text(() => {
  const { colors } = useColors()

  return css`
    color: ${colors.default500};
    font-size: 16px;
  `
})

export const ErrorMessage = styled.Text(() => {
  const { colors } = useColors()

  return css`
    color: ${colors.danger};
    font-size: 12px;
  `
})

export const Asterisk = styled.Text(() => {
  const { colors } = useColors()

  return css`
    color: ${colors.danger};
  `
})
