import { useContext, useState } from 'react';
import { css } from 'react-emotion';
import { InputContext } from './InputContext';

const cssLabel = css({
  display: 'inline-block',
  margin: '4px 0px',
  padding: '2px 8px',
  backgroundColor: '#e0e0e0',
  borderRadius: 8,
  button: {
    backgroundColor: 'transparent',
    color: 'red',
    marginLeft: 4,
    fontSize: 22,
    padding: 0,
    border: 'none',
    outline: 'none',
  }
})

const Label = () => {
  const { input, handleClear } = useContext(InputContext)
  const [ showClear, setShowClear ] = useState(false)

  if (!input) return null

  return (
    <span 
      className={cssLabel}
      onMouseEnter={() => setShowClear(true)}
      onMouseLeave={() => setShowClear(false)}
    >
      {input}
      {showClear && <button type="button" onClick={handleClear}>⊗</button>}
    </span>
  )
}

export default Label;
