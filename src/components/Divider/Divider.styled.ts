import styled, { css } from 'styled-components/native'
import { DividerProps } from './Divider.types'
import { getColor } from '../../utils'

export const DividerWrapper = styled.View<DividerProps>(({ orientation }) => {
  return css`
    height: ${orientation === 'horizontal' ? '1px' : '100%'};
    width: ${orientation === 'horizontal' ? '100%' : '1px'};
    ${orientation === 'horizontal'
      ? 'margin-top: 16px; margin-bottom: 16px;'
      : 'margin-left: 16px; margin-right: 16px;'}
    background-color: ${getColor('default')};
  `
})
