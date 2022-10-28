import { cssModal, modalOverlay } from './style'

const Modal = ({ formValues, onReset }) => {
  return (
    <div className={modalOverlay}>
      <div className={cssModal}>
        Name: {formValues.name}
        <br />
        Age: {formValues.age}
        <br />
        Address: {formValues.address}
        <br />
        <button onClick={onReset}>Reset</button>
      </div>
    </div>
  )
}

export default Modal
