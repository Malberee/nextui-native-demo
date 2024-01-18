import { CircularProgressContextProps } from '../CircularProgress.types'

const defaultProps: Required<CircularProgressContextProps> = {
  size: 'md',
  color: 'primary',
  showValueLabel: false,
  isDisabled: false,
  isIndeterminate: true,
  maxValue: 100,
  minValue: 0,
  strokeWidth: 2,
  formatOptions: {
    options: {
      style: 'percent',
    },
  },
}

const useCircularProgressProps = (
  props: CircularProgressContextProps,
): Required<CircularProgressContextProps> => {
  return { ...defaultProps, ...props }
}

export default useCircularProgressProps
