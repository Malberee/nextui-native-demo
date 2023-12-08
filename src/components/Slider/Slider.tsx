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
  StepsWrapper,
  StepDot,
  TouchableThumbZone,
  SliderProgress,
  SliderThumb,
} from './Slider.styled'

import { SliderProps } from './Slider.types'
import { SliderContext } from './hooks/useSliderContext'
import { useSliderProps } from './hooks/useSliderProps'
import { useSliderAnimation } from './hooks/useSliderAnimation'
import Steps from './Steps'

const Slider: FC<SliderProps> = ({ label, value, defaultValue, ...props }) => {
  const [trackWidth, setTrackWidth] = useState(0)
  const [thumbWidth, setThumbWidth] = useState(0)
  const sliderProps = useSliderProps(props)
  const { minValue, maxValue, step, showSteps } = sliderProps

  const {
    gestureHandler,
    values: { sliderValue },
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
          <SliderValue text={sliderValue} />
        </SliderContent>
        <SliderInner>
          <SliderTrack
            onLayout={(e: LayoutChangeEvent) => onLayout(e, 'track')}
          >
            {showSteps && (
              <Steps
                steps={(maxValue - minValue) / step + 1}
                trackWidth={trackWidth}
                isReached={false}
              />
            )}
            <SliderProgress style={animatedProgressStyle}>
              {showSteps && (
                <Steps
                  steps={(maxValue - minValue) / step + 1}
                  trackWidth={trackWidth}
                  isReached={true}
                />
              )}
            </SliderProgress>
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
