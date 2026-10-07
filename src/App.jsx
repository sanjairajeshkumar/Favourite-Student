import { useState } from 'react'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from '../components/Navbar'
import StudentList from '../pages/StudentList'
import FavouriteStudentList from '../pages/FavouriteStudentsList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { StudentProvider } from '../context/StudentContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StudentProvider>
        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path='/' element={<StudentList />}>  </Route>
            <Route path='/list' element={<StudentList />}>  </Route>
            <Route path='/fav' element={<FavouriteStudentList />} > </Route>
          </Routes>
        </BrowserRouter>
      </StudentProvider>

    </>
  )
}

export default App
