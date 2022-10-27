import { createContext, useState } from "react";
import DATA from "./_data";

const DataContext = createContext()

const DataProvider = ({children}) => {
    const [data, setData] = useState(DATA)
    const [query, setQuery] = useState('')

    const handleQueryChange = (event) => {
        const query = event.target.value.trim()

        setQuery(query)
    }

    const handleSearch = () => {
        const filteredData = DATA.filter(d => d.name.toLowerCase().includes(query.toLowerCase()))

        setData(filteredData)
        setQuery('')
    }

    return (
        <DataContext.Provider value={{
            data,
            query,
            handleSearch,
            handleQueryChange
        }}>
            {children}
        </DataContext.Provider>
    )
}

export {DataContext, DataProvider}