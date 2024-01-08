import React, { FC, useState, useRef } from 'react'
import { LayoutChangeEvent, View } from 'react-native'
import {
  BadgeWrapper,
  BadgeOutline,
  BadgeInner,
  BadgeContent,
} from './Badge.styled'

import { BadgeProps } from './Badge.types'
import { BadgeContext } from './hooks/useBadgeContext'
import { useBadgeProps } from './hooks/useBadgeProps'
import { getShadow } from '../../utils/getShadow'
import useColors from '../ThemeProvider/hooks/useColors'
import useBadgeAnimation from './hooks/useBadgeAnimation'

const Badge: FC<BadgeProps> = ({ children, content, ...props }) => {
  const [width, setWidth] = useState(0)
  const [hasLayoutOccurred, setHasLayoutOccurred] = useState(false)
  const { colors } = useColors()
  const childRef = useRef<{ isDisabled: boolean }>(null)
  const { variant, color, showOutline, ...badgeProps } = useBadgeProps({
    isDisabled: !!childRef.current?.isDisabled,
    width,
    ...props,
  })
  const { animatedBadgeStyles } = useBadgeAnimation(badgeProps.isInvisible)

  const onLayout = (e: LayoutChangeEvent) => {
    if (!hasLayoutOccurred) {
      setWidth(e.nativeEvent.layout.width)
      setHasLayoutOccurred(true)
    }
  }

  return (
    <BadgeContext.Provider
      value={{ variant, color, showOutline, ...badgeProps }}
    >
      <View>
        {React.cloneElement(children as React.ReactElement, { ref: childRef })}
        <BadgeWrapper onLayout={onLayout} style={animatedBadgeStyles}>
          <BadgeInner style={{ ...getShadow(variant, colors, color) }}>
            {!props.isDot && (
              <BadgeContent>
                {props.isOneChar && typeof content === 'string'
                  ? content.charAt(0)
                  : content}
              </BadgeContent>
            )}
          </BadgeInner>
          {showOutline && <BadgeOutline />}
        </BadgeWrapper>
      </View>
    </BadgeContext.Provider>
  )
}
export default Badge
