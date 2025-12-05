// 1. Import the Link component
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1 className='text-center text-5xl font-bold text-green-600'>Welcome to the GREENBIN GENIUS Diagrams Page</h1>
      <div className='mt-8'>
      {/* 2. Use <Link> instead of <a href=""> */}
      <Link className='font-bold text-2xl text-green-400 underline' to="/architecture_diagram">
        Architecture Diagram
      </Link>
      <br></br>
      <Link className='font-bold text-2xl text-green-400 underline' to="/layered_architecture">
        Layered Architecture Diagram
      </Link>
      <br></br>
       <Link className='font-bold text-2xl text-green-400 underline' to="/module_diagram">
        Module Interaction Diagram
      </Link>
      <br></br>
      <Link className='font-bold text-2xl text-green-400 underline' to="/class_diagram">
        System Class Diagram
      </Link>
      <br></br>
      <Link className='font-bold text-2xl text-green-400 underline' to="/activity_diagram">
        Activity Diagram
      </Link>
      <br></br>
      {/* <Link className='font-bold text-2xl text-green-400 underline' to="/sequence_diagram">
        Sequence Diagram
      </Link> */}
      {/* <br></br>
      <Link className='font-bold text-2xl text-green-400 underline' to="/system_sequence_diagram">
        System Sequence Diagram
      </Link> */}
      <br></br>
      <Link className='font-bold text-2xl text-green-400 underline' to="/deployment_diagram">
        Deployment Diagram
      </Link>
      <br></br>
      <Link className='font-bold text-2xl text-green-400 underline' to="/state_transition_diagram">
        State Transition Diagram
      </Link>
      <br></br>
      <Link className='font-bold text-2xl text-green-400 underline' to="/enhanced_class_diagram">
        Enhanced Class Diagram
      </Link>
      <br></br>
      <Link className='font-bold text-2xl text-green-400 underline' to="/use_case_diagram">
        Use Case Diagram
      </Link>
      <br></br>
      <Link className='font-bold text-2xl text-green-400 underline' to="/package_diagram">
        Package Diagram
      </Link>
      <br></br>
      <Link className='font-bold text-2xl text-green-400 underline' to="/modified_deployment_diagram">
       Deployment Diagram Modified
      </Link>
      {/* <br></br>
      <Link className='font-bold text-2xl text-green-400 underline' to="/erd_diagram">
       ERD Diagram
      </Link> */}
      <br></br>
      <Link className='font-bold text-2xl text-green-400 underline' to="/sequence_diagram_mod">
       Sequence Diagram Modified
      </Link>
       <br></br>
      <Link className='font-bold text-2xl text-green-400 underline' to="/sys_sequence_diagram">
       System Sequence Diagram 
      </Link>
       <br></br>
      <Link className='font-bold text-2xl text-green-400 underline' to="/activity_diagram_mod">
      System Activity Diagram  
      </Link>
      </div>
      <br></br>
      <br></br>
      {/* <Link className='font-bold text-2xl text-green-400 underline' to="/cuonline_prototype">
       CUOnline Prototype
      </Link>
      <br></br>
      
      <Link className='font-bold text-2xl text-green-400 underline' to="/cuonline_moodboard">
       CUOnline MoodBoard
      </Link>
      <br></br>
      <Link className='font-bold text-2xl text-green-400 underline' to="/honeybee_moodboard">
       HoneyBee MoodBoard
      </Link> */}

    </div>
  );
}

export default HomePage;