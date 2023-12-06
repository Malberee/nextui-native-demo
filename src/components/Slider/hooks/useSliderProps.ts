import { SliderContextProps, SliderProps } from '../Slider.types'

export const defaultProps: SliderContextProps = {
  size: 'md',
  color: 'primary',
  radius: 'full',
  step: 1,
  minValue: 0,
  maxValue: 100,
  orientation: 'horizontal',
  showSteps: false,
  showTooltip: false,
  showOutline: false,
  hideValue: false,
  hideThumb: false,
  disableThumbScale: false,
  isDisabled: false,
  disableAnimation: false,
}

export const useSliderProps = (
  props: Partial<SliderProps>,
): SliderContextProps => {
  return { ...defaultProps, ...props }
}
