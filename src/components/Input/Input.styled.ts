import { css } from 'styled-components'
import styled from 'styled-components/native'
import useColors from '../ThemeProvider/hooks/useColors'
import { useInputContext } from './hooks/useInputContext'
import { getRadius } from '../../utils/getRadius'
import { paddings, radii, sizes } from './Input.constants'
import { getSize } from '../../utils/getSize'

export const InputWrapper = styled.View(() => {
  return css`
    width: 100%;
  `
})

export const InputInner = styled.View(() => {
  return css`
    width: 100%;
    display: flex;
    justify-content: center;
  `
})

export const StyledTextInput = styled.TextInput(() => {
  const { radius, size, color } = useInputContext()
  const { colors } = useColors()

  const textColor = color === 'default' ? colors.foreground : colors[color]

  return css`
    width: 100%;
    height: ${getSize(sizes, size)}px;
    padding: ${getSize(paddings, size)}px 12px;
    background-color: ${colors[color]}33;
    color: ${textColor};
    border-radius: ${getRadius(radii, radius)}px;
  `
})

export const Placeholder = styled.Text(() => {
  const { size, color } = useInputContext()
  const { colors } = useColors()

  const fontSize = size === 'lg' ? 16 : 14
  const textColor = color === 'default' ? colors.default500 : colors[color]

  return css`
    position: absolute;
    left: 12px;
    font-size: ${fontSize}px;
    color: ${textColor};
  `
})
