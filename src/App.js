import Login from "./Components/Login";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import WorkTracker from "./Components/WorkTracker";


function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="worktracker" element={<WorkTracker/>} />
      </Routes>  
    </>
  );
}


export default App;
