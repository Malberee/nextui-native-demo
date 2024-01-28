import styled, { css } from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { useSwitchContext } from './hooks/useSwitchContext'
import { getSize } from '../../utils/getSize'
import { switchSizes, thumbSizes } from './Switch.constants'
import { useColors } from '../ThemeProvider'

interface SwitchWrapperProps {
  isChecked?: boolean
}

export const SwitchWrapper = styled(Animated.View)<SwitchWrapperProps>(({
  isChecked,
}) => {
  const { size, color } = useSwitchContext()
  const { colors } = useColors()

  return css`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    width: ${getSize(switchSizes, size)}px;
    height: ${getSize(thumbSizes, size) + 8}px;
    padding: 4px;

    background-color: ${isChecked ? colors[color] : colors.content3};
    border-radius: 9999px;

    overflow: hidden;
  `
})

export const SwitchThumb = styled(Animated.View)<SwitchWrapperProps>(({
  isChecked,
}) => {
  const { size } = useSwitchContext()

  return css`
    position: absolute;
    top: 4px;
    /* ${isChecked ? 'right: 4px;' : 'left: 4px;'} */

    display: flex;
    justify-content: center;
    align-items: center;

    width: ${getSize(thumbSizes, size)}px;
    height: ${getSize(thumbSizes, size)}px;

    background-color: #fff;
    border-radius: 9999px;

    transition: background-color 2000ms linear;

    z-index: 1;
  `
})

export const SwitchLabel = styled.Text(() => {
  return css`
    color: white;
  `
})

export const StartContentWrapper = styled(Animated.View)(() => {
  return css``
})

export const EndContentWrapper = styled(Animated.View)(() => {
  return css``
})
