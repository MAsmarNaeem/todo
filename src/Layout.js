// import { Outlet, Link } from "react-router-dom";

// const Layout = () => {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/MyApp">secondpage</Link>
//           </li>
          
//         </ul>
//       </nav>

//       <Outlet />
//     </>
//   )
// };

// export default Layout;
import React from 'react'
import { Link } from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/MyApp">Home</Link>
          
          
        </li>
        <Link to="/">ret</Link>
      </ul>
      
    </nav>
    
    </>
   
  )
}

export default Layout
