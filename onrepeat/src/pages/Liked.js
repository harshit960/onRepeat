import React from 'react'
import Nav from "../components/Nav"
import Player from '../components/Player'

export default function Liked() {
  return (
    <div>
      <div class="grid grid-rows-3 grid-cols-6 h-full">
        <Nav />
        
        <Player />
      </div>
    </div>
  )
}
