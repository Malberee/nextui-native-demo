import styled, { css } from 'styled-components/native'
import { useSliderContext } from './hooks/useSliderContext'
import { getSize } from '../../utils/getSize'
import { thumbSizes, trackSizes } from './Slider.constants'
import useColors from '../ThemeProvider/hooks/useColors'
import Animated from 'react-native-reanimated'
import { ReText } from 'react-native-redash'

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

export const SliderValue = styled(ReText)(() => {
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
    overflow: hidden;
  `
})

export const StepsWrapper = styled.View(() => {
  const { size } = useSliderContext()

  console.log(getSize(thumbSizes, size) / 2)

  return css`
    position: absolute;
    width: 100%;
    padding: 0 ${getSize(thumbSizes, size) / 2 - 3}px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `
})

export const StepDot = styled.View(() => {
  return css`
    width: 6px;
    height: 6px;
    background-color: #00000080;
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
  const { size, color, hideThumb } = useSliderContext()
  const { colors } = useColors()

  const thumbSize = getSize(thumbSizes, size)

  return css`
    position: relative;
    left: ${size === 'lg' ? 2 : 0}px;

    width: ${thumbSize}px;
    height: ${thumbSize}px;

    background-color: ${colors.background};
    border-color: ${colors[color]};
    border-width: 2px;
    border-radius: 9999px;

    opacity: ${hideThumb ? 0 : 1};
  `
})
