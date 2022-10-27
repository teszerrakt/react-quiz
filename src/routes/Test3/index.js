import { useRef } from "react";

const Test3 = () => {
  const inputRef = useRef()

  const handleFocus = () => {
    inputRef.current.focus()
  }

  return(
    <div>
      <ul>
        <li>Please focus to the text field when user click the focus button</li>
      </ul>
      <p>
        <button type="button" onClick={handleFocus}>Focus Text Field</button>
      </p>
      <input ref={inputRef} type="text" placeholder="focus me"/>
    </div>
  )
}

export default Test3;