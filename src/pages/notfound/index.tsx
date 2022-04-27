import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "../../components/Layout";

function NotFound() {
  let location = useLocation();

  return (
    <Layout>
      <div>
        No match for <code>{location.pathname}</code>
      </div>
    </Layout>
  );
}

export default NotFound;
