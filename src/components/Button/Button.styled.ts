import styled, { css } from 'styled-components/native'
import useColors from '../ThemeProvider/hooks/useColors'
import { getRadius, getTextColor } from '../../utils'
import { radii } from './Button.constants'
import { useButtonContext } from './hooks/useButtonContext'

export const ButtonWrapper = styled.TouchableOpacity(() => {
  const { radius = 'lg', color = 'default' } = useButtonContext()
  const { colors } = useColors()

  return css`
    padding: 24px;

    background-color: ${colors[color]};
    border-radius: ${getRadius(radii, radius)}px;
  `
})

export const ButtonText = styled.Text(() => {
  const { color = 'default' } = useButtonContext()

  const { colors } = useColors()

  return css`
    color: ${getTextColor(color)};
  `
})
