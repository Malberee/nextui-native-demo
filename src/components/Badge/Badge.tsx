import React, { FC, useState, useRef } from 'react'
import { Easing, ZoomIn, ZoomOut } from 'react-native-reanimated'
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
        {!badgeProps.isInvisible && (
          <BadgeWrapper
            onLayout={onLayout}
            entering={ZoomIn.duration(200).easing(
              Easing.bezier(0.17, 0.67, 0.57, 1.3) as any,
            )}
            exiting={ZoomOut.duration(200)}
          >
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
        )}
      </View>
    </BadgeContext.Provider>
  )
}
export default Badge
