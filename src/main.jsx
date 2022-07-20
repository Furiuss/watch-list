import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App'
import {Add} from './pages/Add'
import {Watched} from './pages/Watched'
import {Watchlist} from './pages/WatchList'

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Watchlist />} />
          <Route path="watched" element={<Watched />} />
          <Route path="add" element={<Add />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)