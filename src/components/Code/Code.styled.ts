import styled, { css } from 'styled-components/native'
import { Text } from 'react-native'
import { CodeProps } from './Code.types'
import { radii, sizes } from './Code.constants'
import { getRadius, getSize } from '../../utils'
import useColors from '../ThemeProvider/hooks/useColors'

export const CodeWrapper = styled.View<Pick<CodeProps, 'color' | 'radius'>>(
  ({ color = 'default', radius = 'sm' }) => {
    const { colors } = useColors()

    return css`
      padding: 4px 8px;
      border-radius: ${getRadius(radii, radius)}px;
      background-color: ${colors[color]}33;
    `
  },
)

export const CodeContent = styled.Text<Pick<CodeProps, 'size' | 'color'>>(
  ({ size = 'md', color = 'white' }) => {
    const { colors } = useColors()

    return css`
      font-size: ${getSize(sizes, size)}px;
      line-height: ${size === 'sm' ? 20 : size === 'md' ? 24 : 28}px;
      color: ${colors[color]};
    `
  },
)
