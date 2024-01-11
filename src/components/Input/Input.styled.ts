import { css } from 'styled-components'
import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import useColors from '../ThemeProvider/hooks/useColors'
import { useInputContext } from './hooks/useInputContext'
import { getRadius } from '../../utils/getRadius'
import { paddings, radii, sizes } from './Input.constants'
import { getSize } from '../../utils/getSize'

export const InputContainer = styled.View(() => {
  const { labelPlacement } = useInputContext()

  return css`
    width: 100%;
    display: flex;
    flex-direction: ${labelPlacement === 'outside-left' ? 'row' : 'column'};
    align-items: ${labelPlacement === 'outside-left' ? 'center' : 'normal'};
    gap: 8px;
  `
})

export const InputWrapper = styled.View(() => {
  const { color, size, radius, labelPlacement } = useInputContext()
  const { colors } = useColors()

  return css`
    flex-grow: 1;
    min-height: ${getSize(sizes, size)}px;
    padding: ${getSize(paddings, size)}px 12px;

    display: flex;
    flex-direction: ${labelPlacement === 'inside' ? 'column' : 'row'};
    align-items: ${labelPlacement === 'inside' ? 'normal' : 'center'};

    background-color: ${colors[color]}33;
    border-radius: ${getRadius(radii, radius)}px;
  `
})

export const InputInner = styled.Pressable(() => {
  return css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 6px;
  `
})

export const TextFieldWrapper = styled.View(() => {
  return css`
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
  `
})

export const Placeholder = styled.Text(() => {
  const { color } = useInputContext()
  const { colors } = useColors()

  return css`
    position: absolute;

    color: ${colors[color]};
  `
})

export const StyledTextInput = styled.TextInput(() => {
  const { color, size } = useInputContext()
  const { colors } = useColors()

  return css`
    flex-grow: 1;
  `
})

export const Label = styled(Animated.Text)(() => {
  const { color } = useInputContext()
  const { colors } = useColors()

  return css`
    color: ${colors[color]};
  `
})

export const ClearPressable = styled.Pressable(() => {
  const { color } = useInputContext()
  const { colors } = useColors()

  return css``
})

export const Description = styled.Text(() => {
  const { size } = useInputContext()
  const { colors } = useColors()

  return css``
})
