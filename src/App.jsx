import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter , Route , Routes } from 'react-router-dom'
import { Todo } from './assets/components/Todo'

function App() {
 

  return (
    <>
     <HashRouter>
        <Routes>
          <Route exact path='/' element={<Todo/>}/>
        </Routes>
     </HashRouter>
    </>
  )
}

export default App
