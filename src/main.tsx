import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { BrowserRouter , Routes, Route } from 'react-router-dom'

import ArchitectureDiagram from './pages/greenbin_architecture.tsx';
import LayeredArchitecture from './pages/layered_architecture.tsx';
import ModuleInteractionDiagram from './pages/module_interaction_diagram.tsx';
import SystemClassDiagram from './pages/system_class_diagram.tsx';
import HomePage from './pages/HomePage.tsx'
import ActivityDiagrams from './pages/activity_diagram.tsx'
import SequenceDiagram from './pages/SequenceDigram.tsx'
import DeploymentDiagram from './pages/DeploymentDiagram.tsx'
import StateTransitionDiagram from './pages/StateTransitionDiagram.tsx'
import EnhancedClassDiagram from './pages/EnhancedClassDiagram.tsx'
import UseCaseDiagram from './pages/UseCaseDiagram.tsx'
// import AppCuOnline from './pages/CUOnlinePrototype.tsx'
// import CUMoodboard from './pages/CUOnlineMoodBoard.tsx'
// import HoneyBeeMoodBoard from './pages/HoneyBeeMoodBoard.tsx'
import PackageDiagram from './pages/PackageDiagram.tsx'
import ERDDiagram from './pages/ERDDiagram.tsx'
import DeploymentDiagramMod from './pages/DeploymnetDiagramModiifed.tsx'
import SequenceDiagramMod from './pages/SequenceDiagramMod.tsx'
import SysSequenceDiagram from './pages/SysSequenceDiagram.tsx'

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
      {/* <Route path='system_sequence_diagram' element={<SystemSequenceDiagram />} /> */}
      <Route path='deployment_diagram' element={<DeploymentDiagram />} />
      <Route path='state_transition_diagram' element={<StateTransitionDiagram />}/>
      <Route path='enhanced_class_diagram' element={<EnhancedClassDiagram />} />
      <Route path='use_case_diagram' element={<UseCaseDiagram />} />
      {/* <Route path='cuonline_prototype' element={<AppCuOnline />} />
      <Route path='cuonline_moodboard' element={<CUMoodboard />} />
      <Route path='honeybee_moodboard' element={<HoneyBeeMoodBoard />} /> */}
      <Route path='package_diagram' element={<PackageDiagram />} />
      <Route path='erd_diagram' element={<ERDDiagram />} />
      <Route path='modified_deployment_diagram' element={<DeploymentDiagramMod />} />
      <Route path='sequence_diagram_mod' element={<SequenceDiagramMod />} />
      <Route path='sys_sequence_diagram' element={<SysSequenceDiagram />} />


    </Routes>
    </BrowserRouter>
   
  </StrictMode>,
)
