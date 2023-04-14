import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Todo from './Components/Todo';
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";
// import secondpage from '../src/MyApp';
// import Layout from './Layout';
import Layout from '../src/Layout'
import Routing from './Routing';
import Linkpa from './Linkpa'
import MyComponent from './Linkpa';
import MyApp from './MyApp';


// import thirdpage from './thirdpage';

function App() {
  return (
   <div>
    
    {/* <Linkpa/>

     <Routing/>  */}
      <BrowserRouter>
      <Layout/>
      <Routes>
        <Route path="/" element={<Todo />}/>
        
          <Route path="/MyApp" element={<MyApp />} />
     
       
      </Routes>
    </BrowserRouter>
   
   </div>
  );
}

export default App;
