import { css } from 'styled-components'
import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import useColors from '../ThemeProvider/hooks/useColors'
import { useInputContext } from './hooks/useInputContext'
import { getRadius } from '../../utils/getRadius'
import { paddings, radii, sizes } from './Input.constants'
import { getSize } from '../../utils/getSize'

export const InputContainer = styled.View(() => {
  return css`
    width: 100%;
  `
})

export const InputWrapper = styled.Pressable(() => {
  const { radius, size, color } = useInputContext()
  const { colors } = useColors()

  return css`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 6px;

    padding: ${getSize(paddings, size)}px 12px;
    height: ${getSize(sizes, size)}px;

    background-color: ${colors[color]}33;
    border-radius: ${getRadius(radii, radius)}px;
  `
})

export const InputInner = styled.View(() => {
  return css`
    width: 100%;
  `
})

export const Placeholder = styled.Text(() => {
  const { color } = useInputContext()
  const { colors } = useColors()

  const placeholderColor =
    color === 'default' ? colors.default500 : colors[color]

  return css`
    position: absolute;
    left: 12px;
    color: ${placeholderColor};
  `
})

export const StyledTextInput = styled.TextInput(() => {
  const { color, size } = useInputContext()
  const { colors } = useColors()

  const textColor = color === 'default' ? colors.foreground : colors[color]

  return css`
    flex: 1;
    /* height: ${size === 'lg' ? 24 : 20}px; */
    font-size: ${size === 'lg' ? 16 : 14}px;
    color: ${textColor};
  `
})

export const Label = styled(Animated.Text)(() => {
  const { color } = useInputContext()
  const { colors } = useColors()

  const textColor = color === 'default' ? colors.default600 : colors[color]

  return css`
    position: relative;
    color: ${textColor};
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
    font-size: ${fontSize}px;
    color: ${colors.default400};
  `
})
