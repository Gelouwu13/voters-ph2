import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function NewsEvents() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Main Content */}
      <div className="container mt-5 pt-5 flex-grow-1">
        <h2 className="text-center mb-4 fw-bold text-dark">News & Events</h2>

        <div className="row justify-content-center">
          <div className="col-md-10">
            {/* Example News Cards */}
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h4 className="card-title text-dark">Voter Registration Extended!</h4>
                <p className="card-text">
                  The Commission on Elections (COMELEC) has announced an extension
                  of the voter registration period until <strong>November 30, 2025</strong>.
                  Don’t miss your chance to register online or at your nearest COMELEC office.
                </p>
                <p className="text-muted small">Published on: October 15, 2025</p>
              </div>
            </div>

            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h4 className="card-title text-dark">VotersPH Launches Online Campaign</h4>
                <p className="card-text">
                  VotersPH kicks off a new awareness campaign to educate young Filipinos
                  about the importance of registering and voting in the upcoming elections.
                </p>
                <p className="text-muted small">Published on: October 12, 2025</p>
              </div>
            </div>

            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h4 className="card-title text-dark">Upcoming Event: Youth Vote Summit</h4>
                <p className="card-text">
                  Join us at the <strong>SMX Convention Center Manila</strong> this
                  November 20 for the annual Youth Vote Summit featuring guest speakers,
                  workshops, and live voter registration booths!
                </p>
                <p className="text-muted small">Event Date: November 20, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer outside the container */}
      <footer className="footer mt-auto">
        <div className="footer-top text-center py-4 bg-light">
          <h1>
            <span className="hash">#</span>
            <span className="blue">Voters</span>
            <span className="red">P</span>
            <span className="yellow">H</span>
          </h1>
        </div>

        <div className="footer-bottom d-flex flex-wrap justify-content-around text-center text-md-start p-4 bg-dark text-white">
          <div className="footer-section mb-3">
            <h4>REPUBLIC OF THE PHILIPPINES</h4>
            <p>All content is in the public domain unless otherwise stated.</p>
            <div className="footer-icons">
              <span>🌐</span> <span>📱</span>
            </div>
          </div>

          <div className="footer-section mb-3">
            <h4>ABOUT GOV PH</h4>
            <p>
              Learn more about the Philippine government, its structure, how
              government works, and the people behind it.
            </p>
            <ul className="list-unstyled">
              <li>GOV.PH</li>
              <li>Open Data Portal</li>
              <li>Official Gazette</li>
            </ul>
          </div>

          <div className="footer-section mb-3">
            <h4>GOVERNMENT LINKS</h4>
            <ul className="list-unstyled">
              <li>Office of the President</li>
              <li>Office of the Vice President</li>
              <li>Senate of the Philippines</li>
              <li>House of Representatives</li>
              <li>Supreme Court</li>
              <li>Court of Appeals</li>
              <li>Sandiganbayan</li>
            </ul>
          </div>

          <div className="footer-logo mb-3">
            <div className="footer-logo-text">
              <a className="navbar-brand fw-bold fs-1 text-white text-decoration-none" href="#">
                Voters<span className="red">P</span><span className="yellow">H</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
