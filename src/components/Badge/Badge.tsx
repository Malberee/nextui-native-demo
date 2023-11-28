import React, { FC } from 'react'
import { BadgeWrapper, BadgeOutline, BadgeInner, BadgeText } from './Badge.styled'

import { BadgeProps } from './Badge.types'
import { BadgeContext } from './Badge.context'

const Badge: FC<BadgeProps> = ({
  children,
  content,
  isDot,
  ...props
}) => {
  return (
    <BadgeContext.Provider value={props}>
      <BadgeWrapper>
        {children}
        <BadgeOutline>
          <BadgeInner>
            {!isDot && <BadgeText>{content}</BadgeText>}
          </BadgeInner>
        </BadgeOutline>
      </BadgeWrapper>
    </BadgeContext.Provider>
  )
}

export default Badge
