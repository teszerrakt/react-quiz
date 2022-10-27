import { cssWrapper } from './style'

import { useContext, useState } from 'react'
import Comp2 from './Comp2'
import { CounterContext, INPUT_SOURCE } from './CounterContext'

const Comp1 = () => {
  const { myNumber1, updateValue, currentSource } = useContext(CounterContext)
  const [isOverwrite, setIsOverwrite] = useState(false)

  const handleChange = (event) => {
    updateValue(INPUT_SOURCE.NUMBER_1, event.target.value)
  }

  const toggleOverwrite = () => {
    setIsOverwrite(!isOverwrite)
  }

  return (
    <div className={cssWrapper}>
      Latest Inputted from <code>{currentSource}</code>
      <br />
      <br />
      <label htmlFor="overwrite">
        Local overwrite:{' '}
        <input
          id="overwrite"
          type="checkbox"
          checked={isOverwrite}
          onChange={toggleOverwrite}
        />
        {/* only show when overwrite is checked */}
        {isOverwrite && (
          <input
            id="mynumber1"
            type="text"
            placeholder="input mynumber1"
            value={myNumber1}
            onChange={handleChange}
          />
        )}
      </label>
      <Comp2 />
    </div>
  )
}

export default Comp1
