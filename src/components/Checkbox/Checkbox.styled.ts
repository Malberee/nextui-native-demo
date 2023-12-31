import { Pressable } from 'react-native'
import Animated from 'react-native-reanimated'
import { css } from 'styled-components'
import styled from 'styled-components/native'
import { useCheckboxContext } from './hooks/useCheckboxContext'
import { radii, sizes } from './Checkbox.constants'
import useColors from '../ThemeProvider/hooks/useColors'

export const CheckboxWrapper = styled.View(() => {
  return css`
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 8px;
  `
})

export const CheckboxOutline = styled.View(() => {
  const { size, radius } = useCheckboxContext()
  const { colors } = useColors()

  return css`
    width: ${sizes[size] || size}px;
    height: ${sizes[size] || size}px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: ${radii[radius]}px;
    border-width: 2px;
    border-color: ${colors.default};
  `
})

export const CheckboxFiller = styled(Animated.View)(() => {
  const { size, color } = useCheckboxContext()
  const { colors } = useColors()

  return css`
    width: ${sizes[size] || size}px;
    height: ${sizes[size] || size}px;
    background-color: ${colors[color]};
  `
})
