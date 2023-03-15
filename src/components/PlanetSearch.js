import React from 'react'

function PlanetSearch({ setSearch }) {

  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <input type="text" onChange={handleChange} placeholder='search' />
  )
}

export default PlanetSearch
