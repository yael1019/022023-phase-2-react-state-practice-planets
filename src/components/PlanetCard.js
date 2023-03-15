import React, { useState } from 'react'
import PlanetFacts from "./PlanetFacts"

function PlanetCard({ planet }) {

  const [changeCard, setChangeCard] = useState(true)
  // we'll need some state here to determine whether we show the planet image or
  // the planet facts

  function handleClick() {
    setChangeCard(changeCard => changeCard = !changeCard)
  }

  return (
    <div className="card" onClick={handleClick}>
      <h2>{ planet.name }</h2>
      {
        changeCard 
        ? <img className={planet.is_planet ? 'not-planet' : ''} src={ planet.image } alt={ planet.name } />
        : <PlanetFacts planet={ planet } />
      }
    </div>
  )
}

export default PlanetCard
