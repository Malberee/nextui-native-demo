import styled, { css } from 'styled-components/native'
import { Text } from 'react-native'
import { CodeProps } from './Code.types'
import { radii, sizes } from './Code.constants'
import { getColor, getRadius, getSize } from '../../utils'

export const CodeWrapper = styled.View<Pick<CodeProps, 'color' | 'radius'>>(
  ({ color = 'default', radius = 'sm' }) => {
    return css`
      padding: 4px 8px;
      border-radius: ${getRadius(radii, radius)}px;
      background-color: ${getColor(color)}33;
    `
  },
)

export const CodeContent = styled.Text<Pick<CodeProps, 'size' | 'color'>>(
  ({ size = 'md', color = 'default' }) => {
    return css`
      font-size: ${getSize(sizes, size)}px;
      color: ${getColor(color)};
    `
  },
)
