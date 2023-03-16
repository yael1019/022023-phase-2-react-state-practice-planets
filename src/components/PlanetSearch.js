import React from 'react'

function PlanetSearch({ setSearch, search }) {

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleClick() {
    setSearch("");
  }

  return (
    <>
      <input type="text" onChange={handleChange} value={search} placeholder='search' />
      <button onClick={ handleClick } >Clear</button>
    </>
  )
}

export default PlanetSearch
