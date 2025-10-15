import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./HomePage";
import RegistrationForm from "./RegistrationForm";
import AboutUs from "./AboutUs"; // <-- import AboutUs

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary custom-navbar fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold fs-2" href="#">
            Voters<span className="red">P</span><span className="yellow">H</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-2">
                <a className="nav-link" href="/">Home</a>
              </li>
              {/* About link navigates to /about */}
              <li className="nav-item mx-2">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => navigate("/about")}
                  style={{ textDecoration: "none" }}
                >
                  About
                </button>
              </li>
              <li className="nav-item mx-2"><a className="nav-link" href="#">News & Events</a></li>
              <li className="nav-item mx-2"><a className="nav-link" href="#">Contact Us</a></li>

              {/* Only show Register button on Home page */}
              {location.pathname !== "/register" && (
                <li className="nav-item mx-2">
                  <button
                    className="register-btn btn fw-semibold"
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* ROUTES */}
      <div className="mt-5 pt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/about" element={<AboutUs />} /> {/* <-- AboutUs route */}
        </Routes>
      </div>
    </div>
  );
}
