import { css } from 'react-emotion'

export const cssForm = css({
  marginTop: 24,
  'input, textarea, button': {
    display: 'block',
    marginBottom: 8,
  },
})

export const cssModal = css({
  marginTop: 24,
  padding: '8px 16px',
  width: 200,
  backgroundColor: 'white',
  button: {
    marginTop: 8,
  },
})

export const modalOverlay = css({
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100vh',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(0,0,0,0.8)',
})
