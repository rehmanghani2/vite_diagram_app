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
      <Link className='font-bold text-2xl text-green-400 underline' to="/sequence_diagram">
        Sequence Diagram
      </Link>
      </div>
    </div>
  );
}

export default HomePage;