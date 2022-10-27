import { createContext, useState } from "react";

const InputContext = createContext()

const InputProvider = ({children}) => {
    const [input, setInput] = useState('')

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const handleClear = () => {
        setInput('')
    }

    return (
        <InputContext.Provider value={{
            input,
            handleChange,
            handleClear
        }}>
            {children}
        </InputContext.Provider>
    )
}

export {InputContext, InputProvider}