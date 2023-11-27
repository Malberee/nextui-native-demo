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
  isGrid = false,
  isDisabled,
  isBordered,
  renderCount,
}) => {
  const childrens = React.Children.toArray(children)
  const limitedChildren = childrens?.slice(0, max)

  return (
    <AvatarGroupContext.Provider
      value={{ size, color, radius, isDisabled, isBordered, isGrid }}
    >
      <AvatarGroupWrapper isGrid={isGrid}>
        {React.Children.map(limitedChildren, (child, index) =>
          React.cloneElement(child as ReactElement, { index, isInGroup: true }),
        )}
        {renderCount
          ? renderCount(total || childrens.length - limitedChildren.length)
          : childrens.length - limitedChildren.length > 0 && (
              <Avatar
                name={
                  total
                    ? `+${total}`
                    : `+${childrens.length - limitedChildren.length}`
                }
                index={limitedChildren.length}
                isInGroup
              />
            )}
      </AvatarGroupWrapper>
    </AvatarGroupContext.Provider>
  )
}

export default AvatarGroup
