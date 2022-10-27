import { useState } from "react";

const Test1 = () => {
  const [input, setInput] = useState('')

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  return(
    <div>
      <ul>
        <li>Please render the inputted value</li>
      </ul>
      <p>
        <b>User Input: </b> {input}
      </p>
      <input type="text" placeholder="input here" value={input} onChange={handleChange}/>
    </div>
  )
}

export default Test1;