import React from 'react'
import { Link } from 'react-router-dom'
import MyApp from "../src/MyApp"



const Linkpa = () => {

    return (
      <div>
        <Link to="/MyApp">About</Link>
      </div>
    );
  
}

export default Linkpa
// import React from 'react';
// import { Link, Outlet } from 'react-router-dom';

// function MyComponent() {
//   return (
//     <div>
//       <Link to="/">pages</Link>
//       <Outlet />
//     </div>
//   );
// }

// export default MyComponent;