import React from 'react'
import StarField from '../visual-effects/StarField'
import PlanetSearch from "./PlanetSearch"
import PlanetsContainer from "./PlanetsContainer"
import ToggleLightModeButton from "./ToggleLightModeButton"
import planets from '../data.js'

function App() {

  function toggleLightMode() {
    console.log('make me toggle light mode and dark mode!')
  }

  return (
    <div className={`App dark-mode`}>

      {/* You won't have to touch StarField, it does cool visual things */}
      <StarField />

      <PlanetSearch />

      <ToggleLightModeButton />

      <PlanetsContainer planets={planets} />

    </div>
  );
}

export default App;
