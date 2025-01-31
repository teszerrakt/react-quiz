import { DataProvider } from '../../common/DataContext'
import Input from './Input'
import Table from './Table'

const Test4 = () => {
  return (
    <div>
      <ul>
        <li>Please render data into the table</li>
        <li>
          Please filter the table by name search (after press enter or click
          search button)
        </li>
      </ul>
      <DataProvider>
        <Input />
        <div>
          <Table />
        </div>
      </DataProvider>
    </div>
  )
}

export default Test4
