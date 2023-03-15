import React from 'react'
import PlanetFacts from "./PlanetFacts"

function PlanetCard({planet}) {

  // we'll need some state here to determine whether we show the planet image or
  // the planet facts

  function handleClick() {
    console.log('toggle between the planet image and the planet facts when we click here')
  }

  return (
    <div className="card" onClick={handleClick}>
      <h2>Planet Name Goes Here</h2>

        {/* if the planet isn't a true planet then it gets the className `not-planet` */}
        <img className={''} src={planet.image} alt={planet.name} />

        {/* toggle to show a PlanetFacts component depending on whether we've clicked the div  */}

    </div>
  )
}

export default PlanetCard
