import styled, { css } from 'styled-components/native'
import { useSliderContext } from './hooks/useSliderContext'
import { getSize } from '../../utils/getSize'
import { thumbSizes, trackSizes } from './Slider.constants'
import useColors from '../ThemeProvider/hooks/useColors'
import Animated from 'react-native-reanimated'

export const SliderWrapper = styled.View(() => {
  return css`
    width: 80%;
    align-items: center;
    gap: 8px;
  `
})

export const SliderContent = styled.View(() => {
  return css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
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

export const SliderValue = styled.Text(() => {
  const { size } = useSliderContext()
  const { colors } = useColors()

  return css`
    font-size: ${size === 'lg' ? 16 : 14}px;
    color: ${colors.foreground};
  `
})

export const SliderInner = styled.View(() => {
  return css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  `
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

    background-color: ${colors.default300}80;
    border-radius: 9999px;
  `
})

export const SliderProgress = styled(Animated.View)(() => {
  const { color } = useSliderContext()
  const { colors } = useColors()

  return css`
    position: relative;
    height: 100%;
    background-color: ${colors[color]};
    border-radius: 9999px;
    overflow: hidden;
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
    border-radius: 9999px;

    opacity: ${hideThumb ? 0 : 1};
  `
})

export const MarkList = styled.View(() => {
  return css`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  `
})

export const Mark = styled.Text<{ isReached: boolean }>(({ isReached }) => {
  const { colors } = useColors()
  return css`
    color: ${colors.foreground};
    font-size: 14px;
    opacity: ${isReached ? 1 : 0.5};
  `
})
