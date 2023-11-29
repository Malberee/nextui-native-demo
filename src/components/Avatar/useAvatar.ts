import { useAvatarGroup } from '../AvatarGroup/AvatarGroup.context'
import { AvatarProps } from './Avatar.types'

export const useAvatarProps = (props: AvatarProps) => {
  const groupContext = useAvatarGroup()
  const isInGroup = !!groupContext

  const {
    source,
    color = groupContext?.color ?? 'default',
    radius = groupContext?.radius ?? 'full',
    size = groupContext?.size ?? 'md',
    name,
    icon,
    fallback,
    isBordered = groupContext?.isBordered ?? false,
    isDisabled = groupContext?.isDisabled ?? false,
  } = props

  return {
    source,
    color,
    radius,
    size,
    name,
    icon,
    fallback,
    isBordered,
    isDisabled,
    isInGroup,
  }
}
