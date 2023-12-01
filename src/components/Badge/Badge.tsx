import React, { FC, useState, useRef } from 'react'
import { LayoutChangeEvent } from 'react-native'
import {
  BadgeWrapper,
  BadgeOutline,
  BadgeInner,
  BadgeContent,
} from './Badge.styled'

import { BadgeProps } from './Badge.types'
import { BadgeContext } from './hooks/useBadgeContext'
import { useBadgeProps } from './hooks/useBadgeProps'

const Badge: FC<BadgeProps> = ({ children, content, ...props }) => {
  const [width, setWidth] = useState(0)
  const [hasLayoutOccurred, setHasLayoutOccurred] = useState(false)
  const childRef = useRef<{ isDisabled: boolean }>(null)
  const badgeProps = useBadgeProps({
    isDisabled: !!childRef.current?.isDisabled,
    width,
    ...props,
  })

  const onLayout = (e: LayoutChangeEvent) => {
    if (!hasLayoutOccurred) {
      setWidth(e.nativeEvent.layout.width)
      setHasLayoutOccurred(true)
    }
  }

  return (
    <BadgeContext.Provider value={{ ...badgeProps }}>
      <BadgeWrapper>
        {React.cloneElement(children as React.ReactElement, { ref: childRef })}
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
