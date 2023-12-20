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
  MarkList,
  Mark,
} from './Slider.styled'

import { SliderProps } from './Slider.types'
import { SliderContext } from './hooks/useSliderContext'
import { useSliderProps } from './hooks/useSliderProps'
import { useSliderAnimation } from './hooks/useSliderAnimation'
import Steps from './Steps'

const Slider: FC<SliderProps> = ({
  label,
  value,
  startContent,
  endContent,
  marks,
  formatOptions,
  onValueChange,
  onValueChangeEnd,
  ...props
}) => {
  const [trackWidth, setTrackWidth] = useState(0)
  const [thumbWidth, setThumbWidth] = useState(0)
  const sliderProps = useSliderProps(props)
  const { defaultValue, minValue, maxValue, step, showSteps } = sliderProps
  const [sliderValue, setSliderValue] = useState(0)

  const handleValueChange = (newValue: number) => {
    if (onValueChange) {
      onValueChange(Number(newValue.toFixed(2)))
    }
    setSliderValue(Number(newValue.toFixed(2)))
  }

  const {
    gestureHandler,
    handleButton,
    styles: {
      animatedTouchableThumbZoneStyle,
      animatedThumbStyle,
      animatedProgressStyle,
    },
  } = useSliderAnimation(
    defaultValue,
    minValue,
    maxValue,
    trackWidth,
    thumbWidth,
    step,
    handleValueChange,
    onValueChangeEnd,
  )

  const onLayout = (e: LayoutChangeEvent, element: 'track' | 'thumb') => {
    if (element === 'track') {
      setTrackWidth(e.nativeEvent.layout.width)
    } else {
      setThumbWidth(e.nativeEvent.layout.width)
    }
  }

  const getFormattedValue = () => {
    const range = maxValue - minValue

    if (formatOptions?.options?.style === 'percent') {
      return `${((sliderValue - minValue) * 100) / range}%`
    }
    return sliderValue.toLocaleString(
      formatOptions?.locale,
      formatOptions?.options,
    )
  }

  return (
    <SliderContext.Provider value={sliderProps}>
      <SliderWrapper>
        <SliderContent>
          <SliderLabel>{label}</SliderLabel>
          <SliderValue>{getFormattedValue()}</SliderValue>
        </SliderContent>
        <SliderInner>
          {startContent &&
            React.cloneElement(startContent as React.ReactElement, {
              onPress: () => handleButton('decrement'),
            })}
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
              <TouchableThumbZone style={animatedTouchableThumbZoneStyle}>
                <SliderThumb
                  onLayout={(e: LayoutChangeEvent) => onLayout(e, 'thumb')}
                  style={animatedThumbStyle}
                />
              </TouchableThumbZone>
            </PanGestureHandler>
          </SliderTrack>
          {endContent &&
            React.cloneElement(endContent as React.ReactElement, {
              onPress: () => handleButton('increment'),
            })}
        </SliderInner>
        {marks && (
          <MarkList>
            {marks.map(({ label: markLabel, value: markValue }, index) => (
              <Mark isReached={sliderValue >= markValue} key={index}>
                {markLabel}
              </Mark>
            ))}
          </MarkList>
        )}
      </SliderWrapper>
    </SliderContext.Provider>
  )
}

export default Slider
