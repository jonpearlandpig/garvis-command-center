import { BrowserRouter, Routes, Route } from "react-router-dom";
import PigPen from "./pages/PigPen";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PigPen />} />
    </Routes>
  </BrowserRouter>
);

export default App;
