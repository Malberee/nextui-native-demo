import { useButtonGroupContext } from '../../ButtonGroup/hooks/useButtonGroupContext'
import { ButtonContextProps } from '../Button.types'

export const defaultProps: ButtonContextProps = {
  variant: 'solid',
  color: 'default',
  size: 'md',
  radius: 'md',
  fullWidth: false,
  isDisabled: false,
  isInGroup: false,
  isIconOnly: false,
  isFirst: false,
  isLast: false,
}

export const useButtonProps = (
  props: Partial<ButtonContextProps>,
): ButtonContextProps => {
  const groupContext = useButtonGroupContext()
  const isInGroup = !!Object.keys(groupContext).length

  return {
    ...defaultProps,
    ...groupContext,
    ...props,
    isInGroup,
  }
}
