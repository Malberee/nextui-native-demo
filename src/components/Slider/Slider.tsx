import React, { FC, useState } from 'react'
import { PanGestureHandler } from 'react-native-gesture-handler'
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
  ...props
}) => {
  const [trackWidth, setTrackWidth] = useState(0)
  const sliderProps = useSliderProps(props)
  const { gestureHandler, animatedThumbStyle, animatedProgressStyle } = useSliderAnimation(
    defaultValue,
    minValue,
    maxValue,
    trackWidth,
  )

  const onLayout = (e: LayoutChangeEvent) => {
    // if (!hasLayoutOccurred) {
    setTrackWidth(e.nativeEvent.layout.width)
    // setHasLayoutOccurred(true)
    // }
  }

  return (
    <SliderContext.Provider value={sliderProps}>
      <SliderWrapper>
        <SliderContent>
          <SliderLabel>{label}</SliderLabel>
          <SliderValue>{value}</SliderValue>
        </SliderContent>
        <SliderInner>
          <SliderTrack onLayout={onLayout}>
            <SliderProgress style={animatedProgressStyle} />
            <PanGestureHandler onGestureEvent={gestureHandler}>
              <TouchableThumbZone style={animatedThumbStyle}>
                <SliderThumb />
              </TouchableThumbZone>
            </PanGestureHandler>
          </SliderTrack>
        </SliderInner>
      </SliderWrapper>
    </SliderContext.Provider>
  )
}

export default Slider
