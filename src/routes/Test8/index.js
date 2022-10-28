import { useState } from 'react'
import Modal from './Modal'
import { cssForm } from './style'

const FIELD_NAME = {
  NAME: 'name',
  AGE: 'age',
  ADDRESS: 'address',
}

const INITIAL_STATE = {
  name: '',
  age: '',
  address: '',
}

const OPERATION = {
  CHANGE: 'change',
  SUBMIT: 'submit',
  RESET: 'reset',
}

const Test8 = () => {
  const [formValues, setFormValues] = useState(INITIAL_STATE)
  const [isModalShown, setIsModalShown] = useState(false)
  const { name, age, address } = formValues

  // ONLY ONE HANDLE METHOD ALLOWED
  const handleInput = (operation, event) => {
    switch (operation) {
      case OPERATION.CHANGE:
        const fieldName = event.target.name
        const fieldValue = event.target.value
        setFormValues((state) => ({ ...state, [fieldName]: fieldValue }))
        break
      case OPERATION.RESET:
        setFormValues(INITIAL_STATE)
        setIsModalShown(false)
        break
      case OPERATION.SUBMIT:
        event.preventDefault()
        setIsModalShown(true)
        break
      default:
        break
    }
  }

  return (
    <div>
      <ul>
        <li>User can input the form - only 1 handle method is allowed</li>
        <li>When submit display the modal</li>
        <li>Show the form value inside the modal</li>
        <li>
          Reset the form and close the modal when user click the reset button
        </li>
      </ul>
      <form
        className={cssForm}
        onSubmit={(event) => handleInput(OPERATION.SUBMIT, event)}
      >
        <input
          name={FIELD_NAME.NAME}
          type="text"
          placeholder={FIELD_NAME.NAME}
          value={name}
          onChange={(event) => handleInput(OPERATION.CHANGE, event)}
        />
        <input
          name={FIELD_NAME.AGE}
          type="text"
          placeholder={FIELD_NAME.AGE}
          value={age}
          onChange={(event) => handleInput(OPERATION.CHANGE, event)}
        />
        <textarea
          name={FIELD_NAME.ADDRESS}
          type="text"
          placeholder={FIELD_NAME.ADDRESS}
          value={address}
          onChange={(event) => handleInput(OPERATION.CHANGE, event)}
        />
        <button>Submit</button>
      </form>
      {/* Only Show the modal when user clicked submit */}
      {isModalShown && (
        <Modal
          formValues={formValues}
          onReset={() => handleInput(OPERATION.RESET)}
        />
      )}
    </div>
  )
}

export default Test8
