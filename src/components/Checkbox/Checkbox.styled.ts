import Animated from 'react-native-reanimated'
import { css } from 'styled-components'
import styled from 'styled-components/native'
import { useCheckboxContext } from './hooks/useCheckboxContext'
import { radii, sizes } from './Checkbox.constants'
import useColors from '../ThemeProvider/hooks/useColors'
import { getSize } from '../../utils/getSize'
import { getRadius } from '../../utils/getRadius'
import { useTextColor } from '../../hooks/useTextColor'

export const CheckboxWrapper = styled(Animated.View)(() => {
  const { isDisabled } = useCheckboxContext()

  return css`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 8px;
    padding: 8px;
    opacity: ${isDisabled ? 0.5 : 1};
  `
})

export const CheckboxOutline = styled(Animated.View)(() => {
  const { size, radius, isSelected, isInvalid } = useCheckboxContext()
  const { colors } = useColors()

  console.log(isSelected)

  const Size = getSize(sizes, size)
  const borderColor = isInvalid ? colors.danger : colors.default

  return css`
    width: ${Size}px;
    height: ${Size}px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: ${getRadius(radii, radius)}px;
    border-width: 2px;
    border-color: ${borderColor};
  `
})

export const CheckboxFiller = styled(Animated.View)(() => {
  const { size, color, radius } = useCheckboxContext()
  const { colors } = useColors()

  const Size = getSize(sizes, size)

  return css`
    width: ${Size}px;
    height: ${Size}px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${colors[color]};
    border-radius: ${getRadius(radii, radius)}px;
  `
})

export const LabelWrapper = styled.View(() => {
  return css`
    display: flex;
    justify-content: center;
  `
})

export const LabelText = styled(Animated.Text)(() => {
  const { isInvalid } = useCheckboxContext()
  const { colors } = useColors()

  const textColor = isInvalid ? colors.danger : colors.foreground

  return css`
    color: ${textColor};
  `
})

export const Line = styled(Animated.View)(() => {
  const { isInvalid } = useCheckboxContext()
  const { colors } = useColors()

  const lineColor = isInvalid ? colors.danger : colors.foreground

  return css`
    position: absolute;
    align-self: center;
    height: 2px;
    background-color: ${lineColor};
  `
})

export const MinusIcon = styled.View(() => {
  const { color } = useCheckboxContext()

  return css`
    width: 60%;
    height: 10%;
    background-color: ${useTextColor(color)};
  `
})
