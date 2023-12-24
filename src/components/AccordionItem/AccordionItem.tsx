import React, { FC, useState } from 'react'
import { Pressable, Text } from 'react-native'
import { ArrowLeft1 } from 'nextui-native-icons'
import {
  AccordionItemWrapper,
  AccordionItemHeader,
  HeaderInner,
  Title,
  Subtitle,
  Indicator,
  Content,
} from './AccordionItem.styled'

import { AccordionItemProps } from './AccordionItem.types'
import useColors from '../ThemeProvider/hooks/useColors'
import useAccordionItemAnimation from './hooks/useAccordionItemAnimation'
import { useAccordionItemProps } from './hooks/useProps'
import { AccordionItemContext } from './hooks/useContext'
import { useAccordionContext } from '../Accordion/hooks/useContext'

const AccordionItem: FC<AccordionItemProps> = ({
  children,
  title,
  subtitle,
  index = 0,
  ...props
}) => {
  const accordionItemProps = useAccordionItemProps(props)
  const { colors } = useColors()
  const { selectedKeys, toggleAccordionItem } = useAccordionContext()

  const content = () => {
    if (typeof children === 'string') {
      return <Content>{children}</Content>
    }
    return children
  }

  const { animatedIndicatorStyles } = useAccordionItemAnimation(
    selectedKeys?.includes(index as string) || selectedKeys === 'all',
  )

  return (
    <AccordionItemContext.Provider value={accordionItemProps}>
      <AccordionItemWrapper>
        <Pressable onPress={() => toggleAccordionItem(index)}>
          <AccordionItemHeader>
            <HeaderInner>
              <Title>{title}</Title>
              <Subtitle>{subtitle}</Subtitle>
            </HeaderInner>
            <Indicator style={animatedIndicatorStyles}>
              <ArrowLeft1 width={20} height={20} color={colors.default400} />
            </Indicator>
          </AccordionItemHeader>
        </Pressable>
        {content()}
      </AccordionItemWrapper>
    </AccordionItemContext.Provider>
  )
}

export default AccordionItem
