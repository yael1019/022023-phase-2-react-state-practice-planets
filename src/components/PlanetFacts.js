import React from 'react'

function PlanetFacts({ planet }) {

  // this component is just here to display some planet facts!
  // use it in the PlanetCard when you toggle to showing the planet facts

  return (
    <>
      <p>{planet.fun_fact}</p>
      <p>Orbital Period: {planet.orbital_period_in_earth_days} Earth Days</p>
      <p>God of {planet.god_of.join(', ')}</p>
    </>
  )
}

export default PlanetFacts
