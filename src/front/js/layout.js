import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { ForgotPassword } from "./pages/forgot-password";
import { ResetPassword } from "./pages/reset-password";
import { Signup } from "./pages/signup";
import { Login } from "./pages/login";
import Dashboard from "./pages/dashboard";
import injectContext from "./store/appContext";
import TransformedImages from "./pages/transformed-images";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "")
    return <BackendURL />;

  return (
    <div>
      <BrowserRouter basename={basename}>
        {/* <ScrollToTop> */}
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<ForgotPassword />} path="/forgot-password" />
          <Route element={<ResetPassword />} path="/reset-password" />
          <Route element={<Signup />} path="/signup" />
          <Route element={<Login />} path="/login" />
          <Route element={<Dashboard />} path="/dashboard" />
          <Route element={<TransformedImages />} path="/transformed-images" />
          <Route element={<h1>Not found!</h1>} />
        </Routes>
        {/* <Footer />
        </ScrollToTop> */}
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
