import React, { FC, useState } from 'react'
import {
  BadgeWrapper,
  BadgeOutline,
  BadgeInner,
  BadgeText,
} from './Badge.styled'

import { BadgeProps } from './Badge.types'
import { BadgeContext } from './Badge.context'
import { LayoutChangeEvent } from 'react-native'

const Badge: FC<BadgeProps> = ({ children, content, ...props }) => {
  const [width, setWidth] = useState(0)
  const [hasLayoutOccurred, setHasLayoutOccurred] = useState(false)

  const onLayout = (e: LayoutChangeEvent) => {
    if (!hasLayoutOccurred) {
      setWidth(e.nativeEvent.layout.width)
      setHasLayoutOccurred(true)
    }
  }

  return (
    <BadgeContext.Provider value={{ width, ...props }}>
      <BadgeWrapper>
        {children}
        <BadgeOutline onLayout={onLayout}>
          <BadgeInner>
            {!props.isDot && <BadgeText>{content}</BadgeText>}
          </BadgeInner>
        </BadgeOutline>
      </BadgeWrapper>
    </BadgeContext.Provider>
  )
}

export default Badge
