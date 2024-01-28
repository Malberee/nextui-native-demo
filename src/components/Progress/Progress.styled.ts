import styled, { css } from 'styled-components/native'
import { useProgressContext } from './hooks/useProgressContext'
import { getSize } from '../../utils/getSize'
import { radii, sizes } from './Progress.constants'
import { useColors } from '../ThemeProvider'
import { getRadius } from '../../utils/getRadius'
import Animated from 'react-native-reanimated'
import { ReText } from 'react-native-redash'

export const ProgressWrapper = styled.View`
  width: 100%;
  display: flex;
  gap: 8px;
`

export const ProgressLabels = styled.View(() => {
  return css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  `
})

export const ProgressLabel = styled.Text(() => {
  const { colors } = useColors()
  return css`
    color: ${colors.foreground};
  `
})

export const ProgressValueLabel = styled(ReText)(() => {
  const { colors } = useColors()
  return css`
    color: ${colors.foreground};
  `
})

export const Track = styled.View(() => {
  const { size, radius } = useProgressContext()
  const { colors } = useColors()

  const height = getSize(sizes, size)

  return css`
    width: 100%;
    height: ${height}px;
    background-color: ${colors.default300}80;
    border-radius: ${getRadius(radii, radius)}px;
    overflow: hidden;
  `
})

export const Progression = styled(Animated.View)(() => {
  const { color, radius } = useProgressContext()
  const { colors } = useColors()

  return css`
    height: 100%;
    width: 100%;
    background-color: ${colors[color]};
    border-radius: ${getRadius(radii, radius)}px;
  `
})
