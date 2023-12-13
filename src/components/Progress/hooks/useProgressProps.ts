import { ProgressContextProps } from '../Progress.types'

export const defaultProps: ProgressContextProps = {
  color: 'primary',
  size: 'md',
  radius: 'md',
  isDisabled: false,
  value: 0,
  minValue: 0,
  maxValue: 100,
  showValueLabel: true,
  isIndeterminate: false,
  isStriped: false,
}

export const useProgressProps = (
  props: Partial<ProgressContextProps>,
): ProgressContextProps => {
  return {
    ...defaultProps,
    ...props,
  }
}
