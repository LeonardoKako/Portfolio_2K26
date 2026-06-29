import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppRoutes from "./routes";
import DefaultLayout from "./layouts/DefaultLayout";
import ScrollToTop from "./components/ScrollToTop";

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <DefaultLayout>
        <AppRoutes />
      </DefaultLayout>
    </Router>
  );
};

export default App;
