import { useAvatarGroupContext } from '../../AvatarGroup/hooks/useAvatarGroupContext'
import { BadgeContextProps } from '../Badge.types'

export const defaultProps: Required<BadgeContextProps> = {
  variant: 'solid',
  color: 'default',
  size: 'md',
  shape: 'rectangle',
  placement: 'top-right',
  showOutline: false,
  disableAnimation: false,
  isInvisible: false,
  isDisabled: false,
  isOneChar: false,
  isDot: false,
  width: 20,
}

export const useBadgeProps = (
  props: BadgeContextProps,
): Required<BadgeContextProps> => {
  const groupContext = useAvatarGroupContext()

  return {
    ...defaultProps,
    ...groupContext,
    ...props,
  }
}
