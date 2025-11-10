import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/Home/HomePage'
import DataStructuresPage from './pages/DataStructures/DataStructuresPage'
import AlgorithmsPage from './pages/Algorithms/AlgorithmsPage'
import PlaygroundPage from './pages/Playground/PlaygroundPage'
import AboutPage from './pages/About/AboutPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="data-structures" element={<DataStructuresPage />} />
        <Route path="data-structures/:structureId" element={<DataStructuresPage />} />
        <Route path="algorithms" element={<AlgorithmsPage />} />
        <Route path="algorithms/:algorithmId" element={<AlgorithmsPage />} />
        <Route path="playground" element={<PlaygroundPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  )
}

export default App
