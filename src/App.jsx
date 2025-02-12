
import { Route, Routes } from 'react-router'
import Layout from './layout/Layout'
import Home from './views/Home'

function App() {


  return (
    <Routes>
       {/* Rutas del Home */}
       <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
