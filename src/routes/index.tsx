import React from "react";
import { Routes as DomRoutes, Route } from "react-router-dom";
import App from "../App";
import { Contacts, Home } from "../pages";

const Routes = () => (
  <DomRoutes>
    <Route path="/" element={<Home />} />
    <Route path="/contacts" element={<Contacts />} />
  </DomRoutes>
);

export default Routes;
