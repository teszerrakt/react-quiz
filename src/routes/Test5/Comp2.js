import { useContext } from 'react'
import { CounterContext, INPUT_SOURCE } from './CounterContext'
import { cssWrapper } from './style'

const Comp2 = () => {
  const { myNumber, myNumber1, currentSource } = useContext(CounterContext)
  const latestNumber =
    currentSource === INPUT_SOURCE.NUMBER ? myNumber : myNumber1

  return (
    <>
      <div className={cssWrapper}>Latest inputted value is: {latestNumber}</div>
    </>
  )
}

export default Comp2
