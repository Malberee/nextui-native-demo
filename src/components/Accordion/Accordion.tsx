import React, { FC, Key, useEffect, useState } from 'react'
import { AccordionWrapper } from './Accordion.styled'

import { AccordionProps } from './Accordion.types'
import { AccordionContext } from './hooks/useContext'
import useProps from './hooks/useProps'
import Divider from '../Divider'

const Accordion: FC<AccordionProps> = ({
  children,
  disabledKeys,
  defaultSelectedKeys,
  selectedKeys: selectKeys,
  selectionMode,
  ...props
}) => {
  const [selectedKeys, setSelectedKeys] = useState<'all' | Keys[]>(
    selectKeys || defaultSelectedKeys || [],
  )
  const { showDivider, ...accordionProps } = useProps(props)

  useEffect(() => {
    setSelectedKeys(selectKeys || defaultSelectedKeys || [])
  }, [selectKeys, defaultSelectedKeys])

  const toggleAccordionItem = (key: Key) => {
    if (selectionMode === 'single') {
      setSelectedKeys([key])
      return
    }

    if (selectedKeys !== 'all') {
      setSelectedKeys(
        selectedKeys.includes(key)
          ? selectedKeys.filter((item) => item !== key)
          : [...selectedKeys, key],
      )
    }
  }

  const AccordionsItems = React.Children.map(children, (child, index: any) => {
    return (
      <React.Fragment key={index}>
        {React.cloneElement(child as React.ReactElement, {
          isOpen: selectedKeys?.includes(index) || selectedKeys === 'all',
          toggleAccordionItem,
          index,
        })}
        {index < React.Children.count(children) - 1 && showDivider && (
          <Divider />
        )}
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
