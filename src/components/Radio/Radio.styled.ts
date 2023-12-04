import styled, { css } from 'styled-components/native'
import useColors from '../ThemeProvider/hooks/useColors'
import { getSize } from '../../utils/getSize'
import { sizes } from './Radio.contants'
import { useRadioContext } from './hooks/useRadioContext'

export const RadioWrapper = styled.View(() => {
  return css`
    padding: 8px;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 8px;
  `
})

export const RadioLabel = styled.Text(() => {
  const { colors } = useColors()
  return css`
    color: ${colors.foreground};
  `
})

export const RadioOutline = styled.View(() => {
  const { size, color, selectedRadio, value } = useRadioContext()
  const { colors } = useColors()

  return css`
    position: relative;
    width: ${getSize(sizes, size)}px;
    height: ${getSize(sizes, size)}px;
    border-radius: 9999px;
    border-color: ${selectedRadio === value ? colors[color] : colors.default};
    border-width: 2px;

    display: flex;
    justify-content: center;
    align-items: center;
  `
})

export const RadioDot = styled.View(() => {
  const { size, color } = useRadioContext()
  const { colors } = useColors()

  return css`
    width: ${getSize(sizes, size) - 12}px;
    height: ${getSize(sizes, size) - 12}px;

    background-color: ${colors[color]};
    border-radius: 9999px;
  `
})
