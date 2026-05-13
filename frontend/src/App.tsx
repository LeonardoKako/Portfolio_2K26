import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppRoutes from "./routes";
import DefaultLayout from "./layouts/DefaultLayout";

const App: React.FC = () => {
  return (
    <Router>
      <DefaultLayout>
        <AppRoutes />
      </DefaultLayout>
    </Router>
  );
};

export default App;
