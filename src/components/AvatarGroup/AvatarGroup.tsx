import React, { FC } from 'react'
import { AvatarGroupWrapper } from './AvatarGroup.styled'

import { AvatarGroupProps } from './AvatarGroup.types'
import { AvatarGroupContext } from './AvatarGroup.context'

const AvatarGroup: FC<AvatarGroupProps> = ({
  children,
  max,
  total,
  size,
  color,
  radius,
  isGrid,
  isDisabled,
  isBordered,
  renderCount,
}) => {
  return (
    <AvatarGroupWrapper isGrid={isGrid}>
      <AvatarGroupContext.Provider
        value={{ size, color, radius, isDisabled, isBordered }}
      >
        {children}
      </AvatarGroupContext.Provider>
    </AvatarGroupWrapper>
  )
}

export default AvatarGroup
