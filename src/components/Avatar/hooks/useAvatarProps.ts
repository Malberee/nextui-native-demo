import { useAvatarGroupContext } from '../../AvatarGroup/hooks/useAvatarGroupContext'
import { AvatarContextProps } from '../Avatar.types'

export const defaultProps: AvatarContextProps = {
  source: undefined,
  color: 'default',
  radius: 'full',
  size: 'md',
  isBordered: false,
  isDisabled: false,
}

export const useAvatarProps = (props: Partial<AvatarContextProps>) => {
  const groupContext = useAvatarGroupContext()

  return {
    ...defaultProps,
    ...groupContext,
    ...props,
  }
}
