// 1. Import the Link component
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      
      {/* 2. Use <Link> instead of <a href=""> */}
      <Link to="/architecture_diagram">
        Architecture Diagram
      </Link>
      <br></br>
      <Link to="/layered_architecture">
        Layered Architecture Diagram
      </Link>
      <br></br>
       <Link to="/module_diagram">
        Module Interaction Diagram
      </Link>
      <br></br>
      <Link to="/class_diagram">
        System Class Diagram
      </Link>
      <br></br>
      <Link to="/activity_diagram">
        Activity Diagram
      </Link>
    </div>
  );
}

export default HomePage;