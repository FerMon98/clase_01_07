import { StrictMode, React, useEffect } from 'react'
import { ReactDom, createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'

import Home from './Home.jsx'
import Cursos from './Cursos.jsx'
import CursosDetalles from './CursosDetalles.jsx'
import ProtectedRoute from "./Auth/ProtectedRoute.jsx";
import Admin from './cases/Admin.jsx'
import Login from "./Auth/Login.jsx";
import NotFound from "./cases/NotFound.jsx"

function ExternalRedirect({ url }) {
  useEffect(() => {
    window.location.href = url;
  }, [url]);

  return null;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/Cursos" element={<Cursos />} />
          <Route path="/Cursos/:id" element={<CursosDetalles />} />
          <Route path="/Admin" element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          } />;
          <Route path="/Login" element={<Login />} />
          <Route path="/Cheatsheet" element={
            <ExternalRedirect url="https://websitesetup.org/wp-content/uploads/2014/09/html5-cheat-sheet.png" />
          } />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
