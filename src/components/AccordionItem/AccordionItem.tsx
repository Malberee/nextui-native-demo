import React, { FC, useEffect } from 'react'
import { Pressable, View } from 'react-native'
import { ArrowLeft1 } from 'nextui-native-icons'
import {
  AccordionItemWrapper,
  AccordionItemHeader,
  HeaderInner,
  Title,
  Subtitle,
  Indicator,
  ContentWrapper,
} from './AccordionItem.styled'

import { AccordionItemProps } from './AccordionItem.types'
import useColors from '../ThemeProvider/hooks/useColors'
import useAccordionItemAnimation from './hooks/useAccordionItemAnimation'
import { useAccordionItemProps } from './hooks/useProps'
import { AccordionItemContext } from './hooks/useContext'
import { useAccordionContext } from '../Accordion/hooks/useContext'
import Animated, { runOnUI } from 'react-native-reanimated'

const AccordionItem: FC<AccordionItemProps> = ({
  children,
  title,
  subtitle,
  index = 0,
  startContent,
  indicator,
  ...props
}) => {
  const accordionItemProps = {
    ...useAccordionContext(),
    ...useAccordionItemProps(props),
  }
  const { hideIndicator, disableIndicatorAnimation } = accordionItemProps
  const { colors } = useColors()
  const { selectedKeys, toggleAccordionItem = () => {} } = useAccordionContext()
  const isOpen =
    selectedKeys?.includes(index as string) || selectedKeys === 'all'

  const {
    animatedIndicatorStyles,
    setHeight,
    animatedContentStyles,
    animatedRef,
  } = useAccordionItemAnimation(isOpen)

  const handlePress = () => {
    toggleAccordionItem(index)
    runOnUI(setHeight)()
  }

  return (
    <AccordionItemContext.Provider value={accordionItemProps}>
      <AccordionItemWrapper>
        <Pressable onPress={handlePress}>
          <AccordionItemHeader>
            <HeaderInner>
              {startContent}
              <View>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
              </View>
            </HeaderInner>
            {!hideIndicator && (
              <Indicator
                style={
                  disableIndicatorAnimation ? null : animatedIndicatorStyles
                }
              >
                {indicator || (
                  <ArrowLeft1
                    width={20}
                    height={20}
                    color={colors.default400}
                  />
                )}
              </Indicator>
            )}
          </AccordionItemHeader>
        </Pressable>

        <Animated.View style={animatedContentStyles}>
          {/* // @ts-ignore */}
          <ContentWrapper ref={animatedRef} collapsable={false}>
            {children}
          </ContentWrapper>
        </Animated.View>
      </AccordionItemWrapper>
    </AccordionItemContext.Provider>
  )
}

export default AccordionItem
