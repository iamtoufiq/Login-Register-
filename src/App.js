import "./App.css";
import Test from "./components/Test";
import RegistrationForm from "./components/RegistrationForm";
import Home from "./components/Home";
import Error from "./components/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Test />}></Route>
          <Route path="/register" element={<RegistrationForm />}></Route>
          <Route path="/home" element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />}></Route>
          </Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
