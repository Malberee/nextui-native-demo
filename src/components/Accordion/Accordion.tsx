import React, { FC } from 'react'
import { AccordionWrapper } from './Accordion.styled'

import { AccordionProps } from './Accordion.types'
import { AccordionContext } from './hooks/useContext'
import useProps from './hooks/useProps'
import Divider from '../Divider'

const Accordion: FC<AccordionProps> = ({ children, ...props }) => {
  const accordionProps = useProps(props)

  const AccordionsItems = React.Children.map(children, (child, index) => {
    return (
      <React.Fragment key={index}>
        {child}
        {index < React.Children.count(children) - 1 && <Divider />}
      </React.Fragment>
    )
  })

  return (
    <AccordionContext.Provider value={accordionProps}>
      <AccordionWrapper>{AccordionsItems}</AccordionWrapper>
    </AccordionContext.Provider>
  )
}

export default Accordion
