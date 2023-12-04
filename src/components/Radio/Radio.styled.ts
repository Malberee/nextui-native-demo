import styled, { css } from 'styled-components/native'
import Animated from 'react-native-reanimated'
import useColors from '../ThemeProvider/hooks/useColors'
import { getSize } from '../../utils/getSize'
import { sizes } from './Radio.contants'
import { useRadioContext } from './hooks/useRadioContext'

export const RadioWrapper = styled.View(() => {
  const { isDisabled } = useRadioContext()

  return css`
    padding: 8px;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 8px;

    opacity: ${isDisabled ? 0.5 : 1};
  `
})

export const RadioContent = styled.View`
  display: flex;
  justify-content: center;
`

export const RadioLabel = styled.Text(() => {
  const { colors } = useColors()

  return css`
    color: ${colors.foreground};


  `
})

export const RadioDescription = styled.Text(() => {
  const { colors } = useColors()

  return css`
    color: ${colors.default400};
  `
})

export const RadioOutline = styled(Animated.View)(() => {
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

export const RadioDot = styled(Animated.View)(() => {
  const { size, color } = useRadioContext()
  const { colors } = useColors()

  return css`
    width: ${getSize(sizes, size) - 12}px;
    height: ${getSize(sizes, size) - 12}px;

    background-color: ${colors[color]};
    border-radius: 9999px;
  `
})
