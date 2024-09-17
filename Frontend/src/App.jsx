import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { UserForm } from "./pages/UserFormPage";
import { AdminPage } from "./pages/AdminPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<UserForm />} />
        <Route path="/admin_home" element={<AdminPage />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
