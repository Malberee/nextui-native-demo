import { useAvatarGroupContext } from '../../AvatarGroup/hooks/useAvatarGroupContext'
import { BadgeContextProps } from '../Badge.types'

export const useBadgeProps = (props: BadgeContextProps) => {
  const groupContext = useAvatarGroupContext()

  const {
    color = groupContext?.color ?? 'default',
    size = groupContext?.size ?? 'md',
  } = props

  return {
    ...props,
    color,
    size,
  }
}
