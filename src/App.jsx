import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Layout } from "./components/layout/Outlet/Layout";
import Contacto from "./components/page/contacto/Contacto";
import Home from "./components/page/home/Home";

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
            {/* <Route path="/Nosotros" element={<Nosotros/>} /> */}
          </Route>

          {/* Manejar ruta no definida */}
          <Route
            path="*"
            element={
              // <NotFoundContainer />
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
