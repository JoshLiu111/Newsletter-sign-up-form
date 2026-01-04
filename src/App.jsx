import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/loginPage";
import SuccessPage from "./components/successPage";

function App() {
  return (
    <main className="main-page">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </main>
  );
}

export default App;
