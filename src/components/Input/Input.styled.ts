import { css } from 'styled-components'
import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import useColors from '../ThemeProvider/hooks/useColors'
import { useInputContext } from './hooks/useInputContext'
import { getRadius } from '../../utils/getRadius'
import { paddings, radii, sizes } from './Input.constants'
import { getSize } from '../../utils/getSize'

export const InputWrapper = styled.Pressable(() => {
  return css`
    width: 100%;
  `
})

export const InputInner = styled.View(() => {
  const { radius, size, color } = useInputContext()
  const { colors } = useColors()

  return css`
    position: relative;

    width: 100%;
    height: ${getSize(sizes, size)}px;
    display: flex;
    justify-content: center;

    padding: ${getSize(paddings, size)}px 12px;
    background-color: ${colors[color]}33;
    border-radius: ${getRadius(radii, radius)}px;
  `
})

export const StyledTextInput = styled.TextInput(() => {
  const { color, size } = useInputContext()
  const { colors } = useColors()

  const textColor = color === 'default' ? colors.foreground : colors[color]

  return css`
    position: absolute;
    bottom: ${getSize(paddings, size)}px;
    left: 12px;
    width: 100%;
    height: ${size === 'lg' ? 24 : 20}px;
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
