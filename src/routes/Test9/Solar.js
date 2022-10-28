import { cssSpace, cssSun, cssPlanet, cssOrbit, container } from './style'

const Solar = ({ planetNumber }) => {
  const planets = Array.from({ length: planetNumber }, (_, i) => i + 1)

  const generateRandomColor = () => {
    let maxVal = 0xffffff // 16777215
    let randomNumber = Math.random() * maxVal
    randomNumber = Math.floor(randomNumber)
    randomNumber = randomNumber.toString(16)
    let randColor = randomNumber.padStart(6, 0)
    return `#${randColor.toUpperCase()}`
  }

  return (
    <div className={container}>
      <div className={cssSpace(planetNumber)}>
        <div className={cssSun} />
        {planets.map((planet) => (
          <div key={`planet-${planet}`} className={cssOrbit(planet)}>
            <div className={cssPlanet(generateRandomColor(), planet)} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Solar
