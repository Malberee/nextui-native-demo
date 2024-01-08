import { css } from 'styled-components'
import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import useColors from '../ThemeProvider/hooks/useColors'
import { useInputContext } from './hooks/useInputContext'
import { getRadius } from '../../utils/getRadius'
import { paddings, radii, sizes } from './Input.constants'
import { getSize } from '../../utils/getSize'

export const InputContainer = styled.View(() => {
  const { labelPlacement } = useInputContext()

  return css`
    width: 100%;
    display: flex;
    flex-direction: ${labelPlacement === 'outside-left' ? 'row' : 'column'};
    align-items: ${labelPlacement === 'outside-left' ? 'center' : 'left'};
    gap: 8px;
  `
})

export const InputWrapper = styled.View(() => {
  const { radius, size, color, labelPlacement } = useInputContext()
  const { colors } = useColors()

  const paddingsTopBottom =
    labelPlacement !== 'inside' ? 0 : getSize(paddings, size)

  return css`
    position: relative;
    ${labelPlacement === 'outside-left' ? 'flex: 1;' : 'width: 100%;'}

    height: ${getSize(sizes, size) + paddingsTopBottom * 2}px;
    min-height: ${getSize(sizes, size)}px;
    padding: ${paddingsTopBottom}px 12px;

    display: flex;
    justify-content: center;

    background-color: ${colors[color]}33;
    border-radius: ${getRadius(radii, radius)}px;
  `
})

export const InputInner = styled.Pressable(() => {
  return css`
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 6px;
  `
})

export const TextFieldWrapper = styled.View(() => {
  return css`
    position: relative;

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
  `
})

export const Placeholder = styled.Text(() => {
  const { color } = useInputContext()
  const { colors } = useColors()

  const placeholderColor =
    color === 'default' ? colors.default500 : colors[color]

  return css`
    position: absolute;
    color: ${placeholderColor};
  `
})

export const StyledTextInput = styled.TextInput(() => {
  const { color, size } = useInputContext()
  const { colors } = useColors()

  const textColor = color === 'default' ? colors.foreground : colors[color]

  return css`
    width: 100%;
    font-size: ${size === 'lg' ? 16 : 14}px;
    color: ${textColor};
  `
})

export const Label = styled(Animated.Text)(() => {
  const { color } = useInputContext()
  const { colors } = useColors()

  const textColor = color === 'default' ? colors.default600 : colors[color]

  return css`
    position: absolute;
    left: 12px;
    color: ${textColor};
    z-index: 10;
  `
})

export const ClearPressable = styled.Pressable(() => {
  const { color } = useInputContext()
  const { colors } = useColors()

  const placeholderColor =
    color === 'default' ? colors.default500 : colors[color]

  return css`
    margin-left: auto;
    color: ${placeholderColor};
  `
})

export const Description = styled.Text(() => {
  const { size } = useInputContext()
  const { colors } = useColors()

  const fontSize = size === 'lg' ? 16 : 14

  return css`
    padding: 4px;
    width: 100%;
    font-size: ${fontSize}px;
    color: ${colors.default400};
  `
})
