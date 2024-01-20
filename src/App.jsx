import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu.jsx";
import Index from "./components/Index.jsx";
import Problem2 from "./components/problem_2/Problem-2.view.jsx";
import Problem1 from "./components/Problem_1/Problem-1.view.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/" element={<Menu />}>
          <Route path="problem-1" element={<Problem1 />} />
          <Route path="problem-2" element={<Problem2 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
