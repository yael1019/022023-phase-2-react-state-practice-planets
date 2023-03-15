import React from 'react'

function PlanetSearch(props) {

  function handleChange(e) {
    console.log('When you type, you should see planets whose names include the search term');
  }

  return (
    <input type="text" onChange={handleChange} placeholder='search' />
  )
}

export default PlanetSearch
