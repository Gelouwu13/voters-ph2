import "bootstrap/dist/css/bootstrap.min.css";

export default function ContactUs() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Main Content */}
      <div className="container mt-5 pt-5 mb-5 flex-grow-1">
        <h2 className="text-center mb-4 fw-bold text-dark">Contact Us</h2>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <form className="p-4 border rounded-3 shadow-sm bg-light">
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-semibold">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button type="submit" className="register-btn btn w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer mt-auto">
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
