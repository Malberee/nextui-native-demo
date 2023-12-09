import { ProgressContextProps } from '../Progress.types'

export const defaultProps: ProgressContextProps = {
  color: 'primary',
  size: 'md',
  radius: 'md',
  isDisabled: false,
}

export const useProgressProps = (
  props: Partial<ProgressContextProps>,
): ProgressContextProps => {
  return {
    ...defaultProps,
    ...props,
  }
}
