import React, { FC } from 'react'
import { Text } from 'react-native'
import { AccordionItemWrapper } from './AccordionItem.styled'

import { AccordionItemProps } from './AccordionItem.types'

const AccordionItem: FC<AccordionItemProps> = () => {
  return (
    <AccordionItemWrapper>
      <Text>AccordionItem Component</Text>
    </AccordionItemWrapper>
  )
}

export default AccordionItem
