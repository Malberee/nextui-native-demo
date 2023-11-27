import React, { FC, ReactElement } from 'react'
import { AvatarGroupWrapper } from './AvatarGroup.styled'
import Avatar from '../Avatar'

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
  const childrens = React.Children.toArray(children)
  const limitedChildren = childrens?.slice(0, max)

  return (
    <AvatarGroupWrapper isGrid={isGrid}>
      <AvatarGroupContext.Provider
        value={{ size, color, radius, isDisabled, isBordered }}
      >
        {React.Children.map(limitedChildren, (child, index) =>
          React.cloneElement(child as ReactElement, { index }),
        )}
      </AvatarGroupContext.Provider>
      {childrens.length > 1 && (
        <Avatar
          name={`+${childrens.length - limitedChildren.length}`}
          isBordered
          index={limitedChildren.length}
        />
      )}
    </AvatarGroupWrapper>
  )
}

export default AvatarGroup
