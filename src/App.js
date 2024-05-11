import Login from "./Components/Login";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import Page from "./Components/Page";
import ReactTest from "./Components/ReactTest"


function App() {
  return (
    <>
      <Routes>  
      <Route path="/" element={<Login/>} />
      <Route path="worktracker" element={<Page/>} />
      <Route path="logout" element={<Login/>} />
      </Routes>  
    </>
  );
}


export default App;
