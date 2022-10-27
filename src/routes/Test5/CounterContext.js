import { createContext, useEffect, useState } from 'react'

export const CounterContext = createContext()

// const INITIAL_VALUE = {
//   value: 0,
//   lastUpdated: 0,
// }

export const INPUT_SOURCE = {
  NUMBER: '#mynumber',
  NUMBER_1: '#mynumber1',
  NUMBER_2: '#mynumber2',
}

export const CounterProvider = ({ children }) => {
  const [myNumber, setMyNumber] = useState(0)
  const [myNumber1, setMyNumber1] = useState(0)
  const [myNumber2, setMyNumber2] = useState(0)
  const [currentNumber, setCurrentNumber] = useState(0)
  const [currentSource, setCurrentSource] = useState(null)

  const updateValue = (source, newValue) => {
    newValue = +newValue
    newValue = isNaN(newValue) ? 0 : newValue

    switch (source) {
      case INPUT_SOURCE.NUMBER:
        setMyNumber(newValue)
        setCurrentNumber(newValue)
        setCurrentSource(INPUT_SOURCE.NUMBER)
        break
      case INPUT_SOURCE.NUMBER_1:
        setMyNumber1(newValue)
        setCurrentNumber(newValue)
        setCurrentSource(INPUT_SOURCE.NUMBER_1)
        break
      case INPUT_SOURCE.NUMBER_2:
        setMyNumber2(newValue)
        setCurrentNumber(newValue)
        break
      default:
        break
    }
  }

  useEffect(() => {
    setMyNumber(myNumber2)
    setMyNumber1(myNumber2)
  }, [myNumber2])

  return (
    <CounterContext.Provider
      value={{
        myNumber,
        myNumber1,
        myNumber2,
        updateValue,
        currentNumber,
        currentSource,
      }}
    >
      {children}
    </CounterContext.Provider>
  )
}
