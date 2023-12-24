import React, { FC } from 'react'
import { Text } from 'react-native'
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

const AccordionItem: FC<AccordionItemProps> = ({
  children,
  title,
  subtitle,
  ...props
}) => {
  const { colors } = useColors()

  const content = () => {
    if (typeof children === 'string') {
      return <Content>{children}</Content>
    }
    return children
  }

  return (
    <AccordionItemWrapper>
      <AccordionItemHeader>
        <HeaderInner>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </HeaderInner>
        <Indicator>
          <ArrowLeft1 width={20} height={20} color={colors.default400} />
        </Indicator>
      </AccordionItemHeader>
      {content()}
    </AccordionItemWrapper>
  )
}

export default AccordionItem
