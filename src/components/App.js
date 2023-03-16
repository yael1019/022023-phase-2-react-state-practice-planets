import React, { useState } from 'react'
import StarField from '../visual-effects/StarField'
import PlanetSearch from "./PlanetSearch"
import PlanetsContainer from "./PlanetsContainer"
import ToggleLightModeButton from "./ToggleLightModeButton"
import planets from '../data.js'

function App() {

  const [toggle, setToggle] = useState(true);
  const [search, setSearch] = useState('');

  function toggleLightMode() {
    setToggle(toggle => toggle = !toggle)
  }

  return (
    <div className={ toggle ? 'App light-mode' : `App dark-mode`}>

      {/* You won't have to touch StarField, it does cool visual things */}
      <StarField />

      <PlanetSearch setSearch={ setSearch } search={ search } />

      <ToggleLightModeButton toggleLightMode={ toggleLightMode } />

      <PlanetsContainer planets={planets} search={ search } />

    </div>
  );
}

export default App;
