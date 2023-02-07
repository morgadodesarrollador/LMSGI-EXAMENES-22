import React from 'react'
import { Outlet } from 'react-router-dom'
import './main.css'


export const MainPage = () => {
  return (
    <main>
        <h1>Este es el Main</h1>
        <Outlet/>
    </main>
  )
}
