import { BrowserRouter, Route, Routes } from "react-router-dom";
import api from "./services/api";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/Footer";


import { useLocation } from "react-router-dom";

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return null;
}

function App() {

  return (
    <BrowserRouter>

      {/* Show navbar ONLY when logged in */}
      {/* {isAuthenticated() && <Navbar />} */}
        <ScrollToHash />

         <Navbar/> 

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/admin/login" element={<AdminLogin />}></Route>
          <Route path="/admin/dashboard" element={<ProtectedRoute>  <AdminDashboard /></ProtectedRoute> }/>
          
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App;
