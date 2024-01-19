import { ReText } from 'react-native-redash'
import { css } from 'styled-components'
import styled from 'styled-components/native'
import useColors from '../ThemeProvider/hooks/useColors'
import { useCircularProgressContext } from './hooks/useCircularProgressContext'

export const CircularProgressWrapper = styled.View(() => {
  const { isDisabled } = useCircularProgressContext()

  return css`
    opacity: ${isDisabled ? 0.5 : 1};
    display: flex;
    align-items: center;
    justify-content: center;
  `
})

export const ValueLabelWrapper = styled.View(() => {
  return css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  `
})

export const ValueLabel = styled(ReText)(() => {
  const { colors } = useColors()

  return css`
    color: ${colors.foreground};
    text-align: center;
  `
})

export const LabelWrapper = styled.View(() => {
  return css`
    margin-top: 4px;
  `
})
