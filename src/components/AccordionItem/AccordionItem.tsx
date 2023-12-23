import React, { FC } from 'react'
import { Text } from 'react-native'
import {
  AccordionItemWrapper,
  AccordionItemHeader,
} from './AccordionItem.styled'

import { AccordionItemProps } from './AccordionItem.types'

const AccordionItem: FC<AccordionItemProps> = ({ children, ...props }) => {
  return (
    <AccordionItemWrapper>
      <AccordionItemHeader></AccordionItemHeader>
      <Text>{children}</Text>
    </AccordionItemWrapper>
  )
}

export default AccordionItem
