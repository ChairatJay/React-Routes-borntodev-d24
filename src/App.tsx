import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard.tsx";
import Login from './Pages/Login.tsx'
import NotFound from "./Pages/NotFound.tsx";
import News from "./Pages/News.tsx";
 
function App() {
  return (
    <>
      <h1>Hello world!</h1>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/news/:slug" element={<News />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        
      </Routes>
    </>
  );
}

export default App;

