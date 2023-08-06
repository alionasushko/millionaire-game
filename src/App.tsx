import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import Game from './pages/game/Game'
import Home from './pages/main/Home'
import GameResult from './pages/main/GameResult'
import MainLayout from './layouts/main'
import 'react-toastify/dist/ReactToastify.css'

const App: React.FC = () => {
  return (
    <ErrorBoundary
      fallback={
        <div style={{ margin: 20, textAlign: 'center' }}>
          Something went wrong
        </div>
      }
    >
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/game-result" element={<GameResult />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
