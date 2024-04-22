import React from "react";
import { Routes, Route } from "react-router-dom";

import Loading from '../components/Loading';

const Navbar = React.lazy(() => import("../components/Navbar"));
const Home = React.lazy(() => import("../pages/Home"));
const PrivacyPolicy = React.lazy(() => import("../pages/PrivacyPolicy"));
const About = React.lazy(() => import("../pages/About"));
const Error404 = React.lazy(() => import("../pages/Errors/404"));

function Router() {
  return (
    <React.Suspense fallback={<Loading content="Abrindo conteúdo..." />} >
      <Navbar />
      <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/sobre" element={ <About /> } />
          <Route path="/privacidade" element={ <PrivacyPolicy /> } />

          <Route path="*" element={ <Error404 /> } />
      </Routes>
    </React.Suspense>
  );
}

export default Router;
