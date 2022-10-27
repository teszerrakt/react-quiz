import { useContext } from "react";
import { DataContext } from "./DataContext";

const Input = () => {
  const {query, handleSearch, handleQueryChange} = useContext(DataContext)

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        handleSearch()
      }}
    >
      <input type="text" placeholder="search" value={query} onChange={handleQueryChange}/>
      <button type="submit">🔍</button>
    </form>
  )
}

export default Input;
