import { BrowserRouter,Routes,Route } from "react-router-dom"
import "./App.css"
import Task from "./components/task";
import About from "./components/About.jsx";
const App=()=>{
  return(
    <BrowserRouter>
    <div>
      <main>
        <Routes>
          <Route path="/" element ={<Task/>}/>
          <Route path="/about" element ={<About/>}/>
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  )
}
export default App