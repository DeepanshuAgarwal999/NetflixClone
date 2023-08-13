import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Page404 from './pages/Page404'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='*' element={<Page404/>}></Route>
      </Routes>
    </div>
  )
}

export default App