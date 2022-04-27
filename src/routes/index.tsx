import React from "react";
import { Routes as DomRoutes, Route } from "react-router-dom";
import { Contacts, Home, NotFound } from "../pages";

const Routes = () => (
  <DomRoutes>
    <Route path="/" element={<Contacts />} />
    <Route path="/contacts" element={<Contacts />} />
    <Route path="/home" element={<Home />} />
    <Route path="*" element={<NotFound />} />
  </DomRoutes>
);

export default Routes;
