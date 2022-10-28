import { useContext } from 'react'
import { CounterContext, INPUT_SOURCE } from './CounterContext'
import { ModalContext } from './ModalContext'
import { cssWrapper, cssModalRight } from './style'

const Comp4 = (/* NO PROPS ALLOWED */) => {
  const { handleModal } = useContext(ModalContext)
  const { myNumber2, updateValue } = useContext(CounterContext)

  const handleChange = (event) => {
    updateValue(INPUT_SOURCE.NUMBER_2, event.target.value)
  }

  return (
    <>
      <div className={cssWrapper} onClick={(event) => event.stopPropagation()}>
        <div className={cssModalRight}>
          Input Modal
          <button type="button" onClick={handleModal}>
            ⊗
          </button>
        </div>
        <input
          id="mynumber2"
          type="text"
          placeholder="input mynumber2"
          value={myNumber2}
          onChange={handleChange}
        ></input>
      </div>
    </>
  )
}

export default Comp4
