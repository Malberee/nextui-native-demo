import styled, { css } from 'styled-components/native'
import Animated from 'react-native-reanimated'
import useColors from '../ThemeProvider/hooks/useColors'
import { getSize } from '../../utils/getSize'
import { descriptionFontSizes, labelFontSizes, sizes } from './Radio.constants'
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
  const { size, isInvalid } = useRadioContext()
  const { colors } = useColors()

  return css`
    color: ${isInvalid ? colors.danger : colors.foreground};
    font-size: ${getSize(labelFontSizes, size)}px;
  `
})

export const RadioDescription = styled.Text(() => {
  const { size, isInvalid } = useRadioContext()
  const { colors } = useColors()

  return css`
    color: ${isInvalid ? colors.danger : colors.default400};
    font-size: ${getSize(descriptionFontSizes, size)}px;
  `
})

export const RadioOutline = styled(Animated.View)(() => {
  const { size } = useRadioContext()

  return css`
    position: relative;
    width: ${getSize(sizes, size)}px;
    height: ${getSize(sizes, size)}px;
    border-radius: 9999px;
    border-width: 2px;

    display: flex;
    justify-content: center;
    align-items: center;
  `
})

export const RadioDot = styled(Animated.View)(() => {
  const { size, color, isInvalid } = useRadioContext()
  const { colors } = useColors()

  return css`
    width: ${getSize(sizes, size) - 12}px;
    height: ${getSize(sizes, size) - 12}px;

    background-color: ${isInvalid ? colors.danger : colors[color]};
    border-radius: 9999px;
  `
})
