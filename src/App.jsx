import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Layout } from "./components/layout/Outlet/Layout";
import Contacto from "./components/page/contacto/Contacto";
import Home from "./components/page/home/Home";
import Login from "./components/page/login/Login";

function App() {
  return (
    <>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/Contacto" element={<Contacto />} />
          </Route>

          <Route element={<Layout />}>
            <Route path="/inicio" element={<Login />} />
            <Route path="/login" element={<Navigate to="/inicio" replace />} />
          </Route>

          <Route
            path="*"
            element={
              <div style={{ paddingTop: "5rem" }}>
                <p>La página no existe.</p>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
