import styled, { css } from 'styled-components/native'
import { useProgressContext } from './hooks/useProgressContext'
import { getSize } from '../../utils/getSize'
import { radii, sizes } from './Progress.constants'
import useColors from '../ThemeProvider/hooks/useColors'
import { getRadius } from '../../utils/getRadius'

export const ProgressWrapper = styled.View`
  width: 100%;
`

export const Track = styled.View(() => {
  const { size, radius } = useProgressContext()
  const { colors } = useColors()

  const height = getSize(sizes, size)

  return css`
    width: 100%;
    height: ${height}px;
    background-color: ${colors.default300}80;
    border-radius: ${getRadius(radii, radius)}px;
  `
})

export const Progression = styled.View(() => {
  const { color, radius } = useProgressContext()
  const { colors } = useColors()

  return css`
    width: 50%;
    height: 100%;
    background-color: ${colors[color]};
    border-radius: ${getRadius(radii, radius)}px;
    background-image: linear-gradient(red, black);
  `
})
