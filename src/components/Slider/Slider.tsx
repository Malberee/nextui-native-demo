import React, { FC, useState } from 'react'
import Animated, { useAnimatedProps } from 'react-native-reanimated'
import { PanGestureHandler, TextInput } from 'react-native-gesture-handler'
import { LayoutChangeEvent } from 'react-native'
import {
  SliderWrapper,
  SliderContent,
  SliderLabel,
  SliderValue,
  SliderInner,
  SliderTrack,
  TouchableThumbZone,
  SliderProgress,
  SliderThumb,
} from './Slider.styled'

import { SliderProps } from './Slider.types'
import { SliderContext } from './hooks/useSliderContext'
import { useSliderProps } from './hooks/useSliderProps'
import { useSliderAnimation } from './hooks/useSliderAnimation'

const Slider: FC<SliderProps> = ({
  label,
  value,
  defaultValue,
  minValue,
  maxValue,
  step,
  ...props
}) => {
  const [trackWidth, setTrackWidth] = useState(0)
  const [thumbWidth, setThumbWidth] = useState(0)
  const sliderProps = useSliderProps(props)
  const {
    gestureHandler,
    styles: { animatedThumbStyle, animatedProgressStyle },
  } = useSliderAnimation(
    defaultValue,
    minValue,
    maxValue,
    trackWidth,
    thumbWidth,
    step,
  )

  const onLayout = (e: LayoutChangeEvent, element: 'track' | 'thumb') => {
    if (element === 'track') {
      setTrackWidth(e.nativeEvent.layout.width)
    } else {
      setThumbWidth(e.nativeEvent.layout.width)
    }
  }

  return (
    <SliderContext.Provider value={sliderProps}>
      <SliderWrapper>
        <SliderContent>
          <SliderLabel>{label}</SliderLabel>
        </SliderContent>
        <SliderInner>
          <SliderTrack
            onLayout={(e: LayoutChangeEvent) => onLayout(e, 'track')}
          >
            <SliderProgress style={animatedProgressStyle} />
            <PanGestureHandler onGestureEvent={gestureHandler}>
              <TouchableThumbZone style={animatedThumbStyle}>
                <SliderThumb
                  onLayout={(e: LayoutChangeEvent) => onLayout(e, 'thumb')}
                />
              </TouchableThumbZone>
            </PanGestureHandler>
          </SliderTrack>
        </SliderInner>
      </SliderWrapper>
    </SliderContext.Provider>
  )
}

export default Slider
