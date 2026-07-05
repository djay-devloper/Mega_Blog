import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Header, Footer } from './components'
import {Outlet} from 'react-router-dom'

function App() {
  const [loading, setLoading]= useState(true)
  const dispatch= useDispatch()

  // the thing user see before the page loads.
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [dispatch])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-sky-100/80'>
      <div className='w-full block'>
        <Header />
        <main className='bg-sky-100/80'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
