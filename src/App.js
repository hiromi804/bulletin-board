import "./App.css"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import ThreadList from "./components/ThreadList"
import New from "./components/Thread/New"
import ThreadInList from "./components/Thread/[id]"

function App() {
  return (
    <div className="base">
      <Header />
      <Routes>
        <Route exact path="/" element={<ThreadList />} />
        <Route path="/thread/New" element={<New />} />
        <Route path="/thread/:id" element={<ThreadInList />} />
      </Routes>
    </div>
  )
}

export default App
