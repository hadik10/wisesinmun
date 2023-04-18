import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const MacBookPro14One = React.lazy(() => import("pages/MacBookPro14One"));
const LoginPage = React.lazy(() => import("pages/LoginPage"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const RegisterPage = React.lazy(() => import("pages/RegisterPage"));
const StartPage = React.lazy(() => import("pages/StartPage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/registerpage" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/macbookpro14one" element={<MacBookPro14One />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
