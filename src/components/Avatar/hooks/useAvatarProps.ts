import { useAvatarGroupContext } from '../../AvatarGroup/hooks/useAvatarGroupContext'
import { AvatarProps } from '../Avatar.types'

export const useAvatarProps = (props: AvatarProps) => {
  const groupContext = useAvatarGroupContext()
  const isInGroup = !!Object.keys(groupContext).length

  const {
    color = groupContext?.color ?? 'default',
    radius = groupContext?.radius ?? 'full',
    size = groupContext?.size ?? 'md',
    isBordered = groupContext?.isBordered ?? false,
    isDisabled = groupContext?.isDisabled ?? false,
  } = props

  return {
    ...props,
    color,
    radius,
    size,
    isBordered,
    isDisabled,
    isInGroup,
  }
}
