import { useContext } from 'react'
import { DataContext } from '../../common/DataContext'

const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
        <TableContent />
      </thead>
    </table>
  )
}

const TableContent = () => {
  const { data } = useContext(DataContext)
  const isDataExist = data.length > 0

  if (!isDataExist) return <tr>User does not exist</tr>

  return data.map((d) => (
    <tr key={`${d.name}-${d.address}-${d.age}`}>
      <td>{d.name}</td>
      <td>{d.age}</td>
      <td>{d.address}</td>
    </tr>
  ))
}

export default Table
