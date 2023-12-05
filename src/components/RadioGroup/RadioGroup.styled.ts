import styled, { css } from 'styled-components/native'
import useColors from '../ThemeProvider/hooks/useColors'
import { RadioGroupProps } from './RadioGroup.types'

export const RadioGroupWrapper = styled.View<
  Pick<RadioGroupProps, 'orientation'>
>(({ orientation }) => {
  return css`
    display: flex;
    flex-direction: ${orientation === 'horizontal' ? 'row' : 'column'};
  `
})

export const RadioGroupLabel = styled.Text(() => {
  const { colors } = useColors()

  return css`
    color: ${colors.foreground};
  `
})

export const ErrorMessage = styled.Text(() => {
  const { colors } = useColors()

  return css`
    color: ${colors.danger};
  `
})

export const Asterisk = styled.Text(() => {
  const { colors } = useColors()

  return css`
    color: ${colors.danger};
  `
})
