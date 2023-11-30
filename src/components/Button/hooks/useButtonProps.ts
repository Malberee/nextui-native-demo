import { useButtonGroupContext } from '../../ButtonGroup/hooks/useButtonGroupContext'
import { ButtonProps } from '../Button.types'

export const useButtonProps = (props: Omit<ButtonProps, 'children'>) => {
  const groupContext = useButtonGroupContext()
  const isInGroup = !!Object.keys(groupContext).length

  const {
    variant = groupContext?.variant ?? 'solid',
    color = groupContext?.color ?? 'default',
    size = groupContext?.size ?? 'md',
    radius = groupContext?.radius ?? 'md',
    fullWidth = groupContext?.fullWidth ?? false,
    isDisabled = groupContext?.isDisabled ?? false,
  } = props

  return {
    ...props,
    variant,
    color,
    size,
    radius,
    fullWidth,
    isDisabled,
    isInGroup,
  }
}
