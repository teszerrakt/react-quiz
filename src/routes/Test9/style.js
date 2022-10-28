import { keyframes, css } from 'react-emotion'

export const container = css({
  width: 800,
  height: 800,
  backgroundColor: 'black',
  overflow: 'hidden',
})

export const cssSpace = (planetNumber) =>
  css({
    marginTop: 24,
    width: 800,
    height: 800,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transform: `scale(${(1 / planetNumber) * 6})`,
  })

export const cssSun = css({
  width: 80,
  height: 80,
  backgroundColor: 'yellow',
  borderRadius: 40,
})

export const cssPlanet = (color, index) =>
  css({
    width: 20,
    height: 20,
    borderRadius: 10,
    marginTop: index * (index + 1.75) * 10,
    position: 'relative',
    background: color,
  })

const GRAVITATION = 10

export const cssOrbit = (index) =>
  css({
    position: 'absolute',
    borderRadius: '100%',
    width: index * 125,
    height: index * 125,
    animation: `${revolution} ${GRAVITATION * index}s linear infinite`,
  })

const revolution = keyframes({
  to: {
    transform: 'rotate(360deg)',
  },
})
