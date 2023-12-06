import styled, { css } from 'styled-components/native'
import { useSliderContext } from './hooks/useSliderContext'
import { getSize } from '../../utils/getSize'
import { thumbSizes, trackSizes } from './Slider.constants'
import useColors from '../ThemeProvider/hooks/useColors'
import Animated from 'react-native-reanimated'
import { TextInput } from 'react-native-gesture-handler'

export const SliderWrapper = styled.View(() => {
  return css`
    width: 90%;
  `
})

export const SliderContent = styled.View(() => {
  return css`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 8px;
  `
})

export const SliderLabel = styled.Text(() => {
  const { size } = useSliderContext()
  const { colors } = useColors()

  return css`
    font-size: ${size === 'lg' ? 16 : 14}px;
    color: ${colors.foreground};
  `
})

const AnimatedValue = Animated.createAnimatedComponent(TextInput)

export const SliderValue = styled(AnimatedValue)(() => {
  const { size } = useSliderContext()
  const { colors } = useColors()

  return css`
    font-size: ${size === 'lg' ? 16 : 14}px;
    color: ${colors.foreground};
  `
})

export const SliderInner = styled.View(() => {
  return css``
})

export const SliderTrack = styled.View(() => {
  const { size } = useSliderContext()
  const { colors } = useColors()

  return css`
    position: relative;

    display: flex;
    justify-content: center;

    width: 100%;
    height: ${getSize(trackSizes, size)}px;

    background-color: ${colors.default300};
    border-radius: 9999px;
  `
})

export const SliderProgress = styled(Animated.View)(() => {
  const { color } = useSliderContext()
  const { colors } = useColors()

  return css`
    height: 100%;
    background-color: ${colors[color]};
    border-radius: 9999px;
  `
})

export const TouchableThumbZone = styled(Animated.View)(() => {
  return css`
    position: absolute;
    align-self: flex-start;
    padding: 12px;
  `
})

export const SliderThumb = styled(Animated.View)(() => {
  const { size, color } = useSliderContext()
  const { colors } = useColors()

  const thumbSize = getSize(thumbSizes, size)

  return css`
    width: ${thumbSize}px;
    height: ${thumbSize}px;
    background-color: ${colors.background};
    border-color: ${colors[color]};
    border-width: 2px;
    border-radius: 9999px;
  `
})
