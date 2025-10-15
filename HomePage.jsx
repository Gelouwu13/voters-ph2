import { useNavigate } from "react-router-dom";
import homepageImg from "./assets/homepage.png";
import homepageImg2 from "./assets/homepage2.png";
import homepageImg3 from "./assets/homepage3.png";
import "./App.css";

export default function HomePage() {
  const navigate = useNavigate(); // <-- add this

  const heroImages = [homepageImg, homepageImg2, homepageImg3];

  return (
    <div className="landing-page d-flex flex-column min-vh-100">
      {heroImages.map((img, index) => (
        <div
          key={index}
          className="hero-section d-flex flex-column justify-content-center align-items-center text-center text-white py-5"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "900px",
            position: "relative",
          }}
        >
          <div style={{ position: "relative", zIndex: 1 }}>
            {index === 0 && (
              <>
                <h1 className="display-3 fw-bold">YOUR VOTE MATTERS</h1>
                <p className="lead mt-3">
                  Empowering citizens through easy and secure voter registration.
                </p>
                {/* Add onClick to navigate */}
                <button
                  className="register-btn btn btn-lg mt-3"
                  onClick={() => navigate("/register")}
                >
                  Register Now
                </button>
              </>
            )}
            {index === 1 && (
              <>
                <h2 className="fw-bold">Stay Informed</h2>
                <p className="lead mt-2">
                  Get the latest news and updates about elections in your area.
                </p>
              </>
            )}
            {index === 2 && (
              <>
                <h2 className="fw-bold">Join the Community</h2>
                <p className="lead mt-2">
                  Connect with fellow voters and share your civic experience.
                </p>
              </>
            )}
          </div>
        </div>
      ))}

      <div className="container my-5 text-center">
        <h2 className="fw-bold">Why Register?</h2>
        <p className="lead">
          Registering to vote ensures your voice is heard and you can make a difference.
        </p>
      </div>

      {/* Footer */}
      <footer className="footer">
      <div className="footer-top">
        <h1>
          <span className="hash">#</span>
          <span className="blue">Voters</span>
          <span className="red">P</span>
          <span className="yellow">H</span>
        </h1>
      </div>

      <div className="footer-bottom">
        <div className="footer-section">
          <h4>REPUBLIC OF THE PHILIPPINES</h4>
          <p>All content is in the public domain unless otherwise stated.</p>
          <div className="footer-icons">
            <span>🌐</span> <span>📱</span>
          </div>
        </div>

        <div className="footer-section">
          <h4>ABOUT GOV PH</h4>
          <p>
            Learn more about the Philippine government, its structure, how
            government works, and the people behind it.
          </p>
          <ul>
            <li>GOV.PH</li>
            <li>Open Data Portal</li>
            <li>Official Gazette</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>GOVERNMENT LINKS</h4>
          <ul>
            <li>Office of the President</li>
            <li>Office of the Vice President</li>
            <li>Senate of the Philippines</li>
            <li>House of Representatives</li>
            <li>Supreme Court</li>
            <li>Court of Appeals</li>
            <li>Sandiganbayan</li>
          </ul>
        </div>

        <div className="footer-logo">
          <div className="footer-logo-text">
            <a className="navbar-brand fw-bold fs-1" href="#">
              Voters<span className="red">P</span><span className="yellow">H</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}
