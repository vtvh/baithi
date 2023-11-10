import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Map() {
  return (
    <div>
      <Header></Header>
      <h2 className='p-3 text-center'> Map</h2>
      <img className='w-100' src="map.jpg" alt="Map of Fun Fusion" />
      <div className="font-weight-bold text-center text-primary p-3 underlined"><a href="https://media2.tokyodisneyresort.jp/home/download/map/TDL_map_en.pdf" target="_blank" rel="noopener noreferrer">Download Map</a></div>
      <Footer></Footer>
    </div>
  )
}

export default Map
