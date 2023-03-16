import React from 'react'
import PlanetCard from "./PlanetCard"

function PlanetContainer({ planets, search }) {

  const filteredPlanets = planets.filter(planet => planet.name.toLowerCase().includes(search.toLowerCase()))
  // map through your planets here!
  const planetsArr = filteredPlanets.map(planet => <PlanetCard key={ planet.id } planet={ planet } />)

  return (
    <div className="flex container">

      { planetsArr }

    </div>
  )
}

export default PlanetContainer
