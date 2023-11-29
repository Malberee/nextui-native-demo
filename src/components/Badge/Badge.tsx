import React, { FC, useState, useRef } from 'react'
import {
  BadgeWrapper,
  BadgeOutline,
  BadgeInner,
  BadgeContent,
} from './Badge.styled'

import { BadgeProps } from './Badge.types'
import { BadgeContext } from './hooks/useBadgeContext'
import { LayoutChangeEvent } from 'react-native'
import { useAvatarGroupContext } from '../AvatarGroup/hooks/useAvatarGroupContext'

const Badge: FC<BadgeProps> = ({ children, content, ...props }) => {
  const [width, setWidth] = useState(0)
  const [hasLayoutOccurred, setHasLayoutOccurred] = useState(false)
  const childRef = useRef<{ isDisabled: boolean }>(null)

  const onLayout = (e: LayoutChangeEvent) => {
    if (!hasLayoutOccurred) {
      setWidth(e.nativeEvent.layout.width)
      setHasLayoutOccurred(true)
    }
  }

  const isInGroup = useAvatarGroupContext().isInGroup

  return (
    <BadgeContext.Provider
      value={{
        isInGroup,
        isDisabled: childRef.current?.isDisabled,
        width,
        ...props,
      }}
    >
      <BadgeWrapper>
        {React.cloneElement(children as React.ReactElement, {
          index: props.index,
          ref: childRef,
        })}
        <BadgeOutline onLayout={onLayout}>
          <BadgeInner>
            {!props.isDot && (
              <BadgeContent>
                {props.isOneChar && typeof content === 'string'
                  ? content.charAt(0)
                  : content}
              </BadgeContent>
            )}
          </BadgeInner>
        </BadgeOutline>
      </BadgeWrapper>
    </BadgeContext.Provider>
  )
}

export default Badge
