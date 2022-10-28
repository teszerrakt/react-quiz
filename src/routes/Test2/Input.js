import { useContext } from "react";
import { InputContext } from "./InputContext";

const Input = () => {
  const { input, handleChange } = useContext(InputContext)

  return <input type="text" placeholder="input here" value={input} onChange={handleChange} />
}

export default Input;
