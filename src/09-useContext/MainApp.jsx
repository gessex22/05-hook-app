import { Navigate, Route, Routes, Link } from "react-router";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { AboutPage } from "./AboutPage";
import { Navbar } from "./Component/Navbar";
import { UserProvider } from "./Context/UserProvider";

export const MainApp = () => {
  return (
    <UserProvider>
      <h1> Main App</h1>
        {/* <a href="/">Home</a>
        <a href="/about"> About</a>
        <a href="/login">Login</a> */}

        <Navbar/>
      
              <hr />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />
        {/* <Route path="/*" element={<LoginPage/>} /> */}
        <Route path="/*" element={<Navigate to="/about" />} />
      </Routes>
    </UserProvider>
  );
};
