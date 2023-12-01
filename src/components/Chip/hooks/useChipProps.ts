import { UseChipProps } from '../Chip.types'

export const defaultProps: Required<UseChipProps> = {
  variant: 'solid',
  color: 'default',
  size: 'md',
  radius: 'full',
  isDisabled: false,
}

export const useChipProps = (props: UseChipProps): Required<UseChipProps> => {

  return { ...defaultProps, ...props }
}
