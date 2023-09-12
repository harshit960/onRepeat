import React from 'react'
import Nav from "../components/Nav"
import Player from '../components/Player'
import Main from '../components/Main'
export default function Home() {
    return (
        <div>
            <div class="grid grid-rows-3 grid-cols-6 h-full">
                <Nav/>
                <Main/> 
                <Player/>
            </div>
        </div>
    )
}
