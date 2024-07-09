import { useState } from 'react'
import './App.css'
import Hero from './component/Hero'
import Generator from './component/Generator'

function App() {
  

  return (
    <main className='main-screen min-h-screen bg-gradient-to-r from-slate-800 to-slate-950' >
     <Hero/>
     <Generator/>
    </main>
  )
}

export default App
