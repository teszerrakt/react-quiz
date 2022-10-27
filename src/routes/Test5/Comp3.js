import { cssWrapper } from './style'

import { useContext } from 'react'
import Comp4 from './Comp4'
import { CounterContext } from './CounterContext'
import { ModalContext, ModalProvider } from './ModalContext'

const Comp3 = (/* NO PROPS ALLOWED */) => {
  const { myNumber } = useContext(CounterContext)
  const { handleModal } = useContext(ModalContext)

  return (
    <>
      <div className={cssWrapper}>The Inputted Value is: {myNumber}</div>
      <button type="button" onClick={() => handleModal(<Comp4 />)}>
        Show Modal
      </button>
    </>
  )
}

const WrapperComp3 = () => (
  <ModalProvider>
    <Comp3 />
  </ModalProvider>
)

export default WrapperComp3
