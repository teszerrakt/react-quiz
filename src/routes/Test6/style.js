import { css } from 'react-emotion'

export const videoWrapper = css({
  backgroundColor: 'black',
  position: 'relative',
  paddingBottom: '75%',
  height: 0,
})

export const cssVideo = css({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
})

export const controlContainer = css({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  padding: 8,
})

export const progress = css({
  width: '100%',
})

export const btnContainer = css({
  display: 'flex',
  gap: 8,
  minWidth: 'fit-content',
  button: {
    backgroundColor: 'lightgreen',
    border: 'none',
    padding: '8px 16px',
    borderRadius: 4,
    cursor: 'pointer',
    '&:hover': {
      filter: 'brightness(0.8)',
    },
  },
})
