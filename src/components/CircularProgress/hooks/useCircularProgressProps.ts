import { CircularProgressProps } from '../CircularProgress.types'

const defaultProps: Required<CircularProgressProps> = {
  size: 'md',
  color: 'primary',
}

const useCircularProgressProps = (
  props: CircularProgressProps,
): Required<CircularProgressProps> => {
  return { ...defaultProps, ...props }
}

export default useCircularProgressProps
