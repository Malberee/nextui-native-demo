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
    flex-direction: row;
    padding: 8px;
  `
})

const animatedPressable = Animated.createAnimatedComponent(Pressable)

export const CheckboxPressable = styled(animatedPressable)(() => {
  const { size, radius, color, isSelected } = useCheckboxContext()
  const { colors } = useColors()

  return css`
    width: ${sizes[size] || size}px;
    height: ${sizes[size] || size}px;

    background-color: ${isSelected ? colors[color] : 'transparent'};
    border-radius: ${radii[radius]}px;
    border-width: 2px;
    border-color: ${colors[color]};
  `
})
