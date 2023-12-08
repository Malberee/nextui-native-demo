import styled, { css } from 'styled-components/native'
import { StepsProps } from './Steps.types'
import { useSliderContext } from '../hooks/useSliderContext'
import { getSize } from '../../../utils/getSize'
import { thumbSizes } from '../Slider.constants'
import useColors from '../../ThemeProvider/hooks/useColors'

export const StepsWrapper = styled.View<Pick<StepsProps, 'trackWidth'>>(
  ({ trackWidth }) => {
    const { size } = useSliderContext()

    const padding = getSize(thumbSizes, size) / 2 - (size === 'lg' ? 4 : 3)

    return css`
      position: absolute;

      height: 100%;
      width: ${trackWidth}px;
      padding-left: ${padding}px;
      padding-right: ${padding - 0.5}px;

      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
    `
  },
)

export const Step = styled.View<Pick<StepsProps, 'isReached'>>(
  ({ isReached }) => {
    const { size } = useSliderContext()
    const { colors } = useColors()

    const stepSize = size === 'lg' ? 8 : 6

    return css`
      width: ${stepSize}px;
      height: ${stepSize}px;

      background-color: ${isReached
        ? `${colors.background}80`
        : `${colors.default300}80`};
      border-radius: 9999px;
    `
  },
)
