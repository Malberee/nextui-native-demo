import Animated from 'react-native-reanimated'
import { css } from 'styled-components'
import styled from 'styled-components/native'
import { useCheckboxContext } from './hooks/useCheckboxContext'
import { radii, sizes } from './Checkbox.constants'
import useColors from '../ThemeProvider/hooks/useColors'
import { getSize } from '../../utils/getSize'
import { getRadius } from '../../utils/getRadius'

export const CheckboxWrapper = styled.View(() => {
  return css`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 8px;
    padding: 8px;
  `
})

export const CheckboxOutline = styled.View(() => {
  const { size, radius } = useCheckboxContext()
  const { colors } = useColors()

  const Size = getSize(sizes, size)

  return css`
    width: ${Size}px;
    height: ${Size}px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: ${getRadius(radii, radius)}px;
    border-width: 2px;
    border-color: ${colors.default};
  `
})

export const CheckboxFiller = styled(Animated.View)(() => {
  const { size, color, radius } = useCheckboxContext()
  const { colors } = useColors()

  const Size = getSize(sizes, size)

  return css`
    width: ${Size}px;
    height: ${Size}px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${colors[color]};
    border-radius: ${getRadius(radii, radius)}px;
  `
})
