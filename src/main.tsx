import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { BrowserRouter , Routes, Route } from 'react-router-dom'

import ArchitectureDiagram from './pages/layered_architecture.tsx';
import LayeredArchitecture from './pages/layered_architecture.tsx';
import ModuleInteractionDiagram from './pages/module_interaction_diagram.tsx';
import SystemClassDiagram from './pages/system_class_diagram.tsx';
import HomePage from './pages/HomePage.tsx'
import ActivityDiagrams from './pages/activity_diagram.tsx'
import SequenceDiagram from './pages/SequenceDigram.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<App />}/>
      <Route index element={<HomePage />} />
      <Route path='architecture_diagram' element={<ArchitectureDiagram />} />
      <Route path='layered_architecture' element={<LayeredArchitecture />} />
      <Route path='module_diagram' element={<ModuleInteractionDiagram />} />
      <Route path='class_diagram' element={<SystemClassDiagram />} />
      <Route path='activity_diagram' element={<ActivityDiagrams />} />
      <Route path='sequence_diagram' element={<SequenceDiagram />} />

    </Routes>
    </BrowserRouter>
   
  </StrictMode>,
)
