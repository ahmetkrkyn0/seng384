import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormPage from "./pages/FormPage";
import ListPage from "./pages/ListPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/people" element={<ListPage />} />
      </Routes>
    </Router>
  );
}

export default App;