import React, { useState } from 'react'

import { NextUIProvider, CircularProgress, Button } from './src'
import { Text } from 'react-native'

export default function App() {
  const [value, setValue] = useState(0)

  return (
    <NextUIProvider>
      <Button onPress={() => setValue((prevState) => prevState + 10)}>
        add
      </Button>
      <CircularProgress
        // isDisabled
        isIndeterminate
        color="danger"
        size={100}
        showValueLabel
        formatOptions={{
          options: {
            style: 'currency',
            currency: 'USD',
          },
        }}
        value={10}
        minValue={0}
        maxValue={100}
        label={<Text style={{ color: 'white' }}>Loading...</Text>}
      />
    </NextUIProvider>
  )
}
