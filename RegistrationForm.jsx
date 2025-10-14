import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    suffix: "",
    gender: "",
    birthday: "",
    citizen: false,
    resident1year: false,
    barangay6months: false,
    email: "",
    agreeEmail: false,
    phone: "",
    code: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration completed!");
  };

  const progressPercent = (step / totalSteps) * 100;

  return (
    <div>
      


      {/* Progress Bar */}
      <div className="container mt-4">
        <div className="progress mb-4">
          <div
            className="progress-bar progress-bar-striped bg-success"
            style={{ width: `${progressPercent}%` }}
          >
            Step {step} of {totalSteps}
          </div>
        </div>

        {/* Registration Form */}
        <div className="card shadow p-4 mb-5">
          <div className="text-center mb-4">
            <span className="badge bg-warning text-dark fs-5">
              VOTERS REGISTRATION FORM
            </span>
          </div>

          {/* STEP 1 - Personal Info */}
          {step === 1 && (
            <>
              <h4 className="text-center mb-4">Personal Information</h4>
              <p className="text-danger small">
                Fields marked with (<strong>*</strong>) are required.
              </p>

              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">First Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Last Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Middle Name (if applicable)</label>
                    <input
                      type="text"
                      className="form-control"
                      name="middleName"
                      value={formData.middleName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Suffix (if applicable)</label>
                    <select
                      className="form-select"
                      name="suffix"
                      value={formData.suffix}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="Jr.">Jr.</option>
                      <option value="Sr.">Sr.</option>
                      <option value="II">II</option>
                      <option value="III">III</option>
                      <option value="IV">IV</option>
                    </select>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Sex *</label>
                    <select
                      className="form-select"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Date of Birth *</label>
                    <input
                      type="date"
                      className="form-control"
                      name="birthday"
                      value={formData.birthday}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <p className="text-danger small">Must check all boxes *</p>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="citizen"
                      checked={formData.citizen}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">
                      I am a <strong>Filipino Citizen.</strong>
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="resident1year"
                      checked={formData.resident1year}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">
                      I have resided in the Philippines for at least <strong>1 year.</strong>
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="barangay6months"
                      checked={formData.barangay6months}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">
                      I have resided in my barangay for at least <strong>6 months.</strong>
                    </label>
                  </div>
                </div>

                <p className="text-danger mt-3 small text-center">
                  All required fields must be completed before proceeding to the next step.
                </p>

                <div className="d-flex justify-content-end mt-4">
                  <button
                    type="button"
                    className="btn btn-primary px-4"
                    onClick={handleNext}
                  >
                    Next
                  </button>
                </div>
              </form>
            </>
          )}

          {/* STEP 2 - Contact Information */}
          {step === 2 && (
            <>
              <h4 className="text-center mb-4">Contact Information</h4>
              <p className="text-danger small">
                Fields marked with (<strong>*</strong>) are required.
              </p>

              <div className="row">
                {/* LEFT SIDE – Contact Form */}
                <div className="col-md-6 border-end pe-4">
                  <form>
                    {/* Email Field */}
                    <div className="mb-3">
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="example@gmail.com (optional)"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Checkbox for Email Updates */}
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="agreeEmail"
                        checked={formData.agreeEmail}
                        onChange={handleChange}
                      />
                      <label className="form-check-label small">
                        I agree to receive updates, voter information, and election news via email.
                      </label>
                    </div>

                    {/* Phone Number with Send Code */}
                    <div className="mb-3">
                      <label className="form-label">Phone Number *</label>
                      <div className="input-group">
                        <span className="input-group-text">+63</span>
                        <input
                          type="text"
                          className="form-control"
                          name="phone"
                          placeholder=""
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                        <button className="btn btn-primary" type="button">
                          Send Code
                        </button>
                      </div>
                    </div>

                    {/* Enter Code */}
                    <div className="mb-3">
                      <label className="form-label">Enter Verification Code *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="code"
                        placeholder="Enter the code you received"
                        value={formData.code}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Verify Button */}
                    <div className="mb-4 text-center">
                      <button
                        type="button"
                        className="btn btn-success px-5"
                        onClick={() => alert('✅ Phone number verified successfully!')}
                      >
                        Verify
                      </button>
                    </div>
                  </form>
                </div>

                {/* RIGHT SIDE – Instructions */}
                <div className="col-md-6 ps-4">
                  <div className="p-3 bg-light border rounded h-100">
                    <h5 className="fw-bold text-primary mb-3">
                      How to Verify Your Phone Number
                    </h5>
                    <p className="text-muted small">
                      Verifying your phone helps us confirm your identity and secure your registration. 
                      Follow these simple steps:
                    </p>
                    <ol className="small text-dark">
                      <li>Enter your <strong>active mobile number</strong> in the field provided.</li>
                      <li>Click <strong>“Send Code”</strong> to receive a 6-digit verification code via SMS.</li>
                      <li>Check your phone’s inbox and find the message from <strong>VOTERS PH</strong>.</li>
                      <li>Type the code you received into the <strong>“Enter Verification Code”</strong> box.</li>
                      <li>After entering the code, click <strong>Verify</strong> to confirm your number.</li>
                    </ol>

                    <div className="alert alert-info mt-4 mb-2 small">
                      💡 <strong>Tip:</strong> Make sure your phone has signal and can receive SMS messages.
                    </div>
                    <p className="text-danger small">
                      Note: You must verify your phone number before proceeding.
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="d-flex justify-content-between mt-4">
                <button
                  type="button"
                  className="btn btn-secondary px-4"
                  onClick={handlePrev}
                >
                  Previous
                </button>
                <button
                  type="button"
                  className="btn btn-primary px-4"
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            </>
          )}
   
          {/* STEP 3 - Address Information */}
          {step === 3 && (
            <>
              <h4 className="text-center mb-4">Address Information</h4>
              <p className="text-danger small">
                Fields marked with (<strong>*</strong>) are required.
              </p>

              <form>
                <div className="row">
                  {/* Street */}
                  <div className="col-12 mb-3">
                    <label className="form-label">Street *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="street"
                      placeholder="Enter your street"
                      value={formData.street || ""}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Address Line 2 */}
                  <div className="col-12 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="address2"
                      placeholder="Address Line 2 (optional)"
                      value={formData.address2 || ""}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Barangay */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Barangay *</label>
                    <select
                      className="form-select"
                      name="barangay"
                      value={formData.barangay || ""}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Barangay</option>
                      <option value="Poblacion">Poblacion</option>
                      <option value="San Isidro">San Isidro</option>
                      <option value="San Roque">San Roque</option>
                      <option value="San Jose">San Jose</option>
                      <option value="Bagong Silang">Bagong Silang</option>
                      <option value="Mabini">Mabini</option>
                      <option value="Sta. Cruz">Sta. Cruz</option>
                    </select>
                  </div>

                  {/* Municipality */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Municipality / City *</label>
                    <select
                      className="form-select"
                      name="municipality"
                      value={formData.municipality || ""}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Municipality / City</option>
                      <option value="Quezon City">Quezon City</option>
                      <option value="Manila">Manila</option>
                      <option value="Makati">Makati</option>
                      <option value="Caloocan">Caloocan</option>
                      <option value="Pasig">Pasig</option>
                      <option value="Taguig">Taguig</option>
                      <option value="Antipolo">Antipolo</option>
                    </select>
                  </div>

                  {/* Province */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Province *</label>
                    <select
                      className="form-select"
                      name="province"
                      value={formData.province || ""}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Province</option>
                      <option value="Metro Manila">Metro Manila</option>
                      <option value="Cavite">Cavite</option>
                      <option value="Laguna">Laguna</option>
                      <option value="Batangas">Batangas</option>
                      <option value="Bulacan">Bulacan</option>
                      <option value="Rizal">Rizal</option>
                      <option value="Pampanga">Pampanga</option>
                    </select>
                  </div>

                  {/* Region */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Region *</label>
                    <select
                      className="form-select"
                      name="region"
                      value={formData.region || ""}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Region</option>
                      <option value="NCR">NCR – National Capital Region</option>
                      <option value="Region IV-A">Region IV-A – CALABARZON</option>
                      <option value="Region III">Region III – Central Luzon</option>
                      <option value="Region V">Region V – Bicol Region</option>
                      <option value="Region VI">Region VI – Western Visayas</option>
                      <option value="Region VII">Region VII – Central Visayas</option>
                      <option value="Region X">Region X – Northern Mindanao</option>
                    </select>
                  </div>

                  {/* Postal Code */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Postal Code</label>
                    <input
                      type="text"
                      className="form-control"
                      name="postal"
                      placeholder="Enter postal code (optional)"
                      value={formData.postal || ""}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Foreign Address */}
                  <div className="col-12 mb-3">
                    <label className="form-label">Foreign Address</label>
                    <textarea
                      className="form-control"
                      name="foreignAddress"
                      rows="2"
                      placeholder="Enter your foreign address (if applicable)"
                      value={formData.foreignAddress || ""}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="d-flex justify-content-between mt-4">
                  <button
                    type="button"
                    className="btn btn-secondary px-4"
                    onClick={handlePrev}
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary px-4"
                    onClick={handleNext}
                  >
                    Next
                  </button>
                </div>
              </form>
            </>
          )}

          {/* STEP 4 - Verification and Identification */}
          {step === 4 && (
            <>
              <h4 className="text-center mb-4">Verification and Identification</h4>
              <p className="text-danger small">
                Fields marked with (<strong>*</strong>) are required.
              </p>

              <div className="row">
                {/* LEFT SIDE – Form Inputs */}
                <div className="col-md-6 border-end pe-4">
                  <form>
                    {/* Biometric Section */}
                    <div className="mb-4 text-center">
                      <label className="form-label fw-bold d-block">Biometric Verification *</label>

                      {/* Biometric Image Preview */}
                      <div className="mb-3">
                        <img
                          src="src\assets\fingerprint.jpg" 
                          alt="Biometric Scanner"
                          className="img-fluid rounded shadow-sm border"
                          style={{ maxWidth: "200px", height: "auto" }}
                        />
                        <p className="text-muted small mt-2">
                          Place your finger on the scanner as shown below.
                        </p>
                      </div>

                      {/* Scan Buttons */}
                      <div className="d-flex justify-content-center gap-3 mb-3">
                        <button type="button" className="btn btn-success w-50">
                          Scan
                        </button>
                        <button type="button" className="btn btn-danger w-50">
                          Stop
                        </button>
                      </div>
                      
                      <p className="small text-muted">
                        Wait until the system detects your fingerprint successfully.
                      </p>
                    </div>

                    {/* Valid ID Selection */}
                    <div className="mb-3">
                      <label className="form-label fw-bold">Select Valid ID *</label>
                      <select
                        className="form-select"
                        name="validID"
                        value={formData.validID || ""}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select your valid ID</option>
                        <option value="Philippine Passport">Philippine Passport</option>
                        <option value="Driver’s License">Driver’s License</option>
                        <option value="SSS ID">SSS ID</option>
                        <option value="GSIS ID">GSIS ID</option>
                        <option value="PRC ID">PRC ID</option>
                        <option value="PhilHealth ID">PhilHealth ID</option>
                        <option value="Postal ID">Postal ID</option>
                        <option value="UMID">UMID</option>
                        <option value="National ID">Philippine National ID</option>
                      </select>
                    </div>

                    {/* Upload or Capture Valid ID */}
                    <div className="mb-4">
                      <label className="form-label">Upload or Capture Your Valid ID *</label>
                      <div className="d-flex gap-3">
                        <button type="button" className="btn btn-primary w-50">
                          Upload Photo
                        </button>
                        <button type="button" className="btn btn-outline-secondary w-50">
                          Take Photo
                        </button>
                      </div>
                    </div>

                    {/* Birth Certificate Upload */}
                    <div className="mb-4">
                      <label className="form-label fw-bold">Upload Your Birth Certificate *</label>
                      <div className="d-flex gap-3">
                        <button type="button" className="btn btn-primary w-50">
                          Upload Photo
                        </button>
                        <button type="button" className="btn btn-outline-secondary w-50">
                          Take Photo
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                {/* RIGHT SIDE – Instructions */}
                <div className="col-md-6 ps-4">
                  <div className="p-3 bg-light border rounded h-100">
                    <h5 className="fw-bold text-primary mb-3">How to Complete Your Verification</h5>
                    <p className="text-muted small">
                      To ensure the security and authenticity of your registration, please follow the steps below carefully:
                    </p>

                    <ol className="small text-dark">
                      <li>Start the biometric process by clicking <strong>Scan</strong>.</li>
                      <li>Once the scanner light turns green, remove your thumb and click <strong>Stop</strong>.</li>
                      <li>Select your valid ID from the dropdown list provided.</li>
                      <li>Click <strong>Upload Photo</strong> to upload a clear image of your valid ID, or use your webcam by clicking <strong>Take Photo</strong>.</li>
                      <li>Next, upload or use your webcam to capture your <strong>Birth Certificate</strong> to verify your identity and date of birth.</li>
                      <li>Ensure all images are clear and readable before clicking <strong>Next</strong>.</li>
                    </ol>

                    <div className="alert alert-info mt-4 mb-2 small">
                      💡 <strong>Tip:</strong> Ensure good lighting when capturing your ID or documents to avoid blurry images.
                    </div>
                    <p className="text-danger small">
                      Note: Unverified documents or unclear uploads may delay your registration process.
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="d-flex justify-content-between mt-4">
                <button
                  type="button"
                  className="btn btn-secondary px-4"
                  onClick={handlePrev}
                >
                  Previous
                </button>
                <button
                  type="button"
                  className="btn btn-primary px-4"
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            </>
          )}

          {/* STEP 5 - Review and Submit */}
          {step === 5 && (
            <>
              <h4 className="text-center mb-4">Review and Submit</h4>
              <p className="text-muted text-center">
                Please review your information carefully before submitting your registration.
              </p>

              <div className="row">
                {/* LEFT SIDE – Personal & Contact Info */}
                <div className="col-md-6 border-end pe-4">
                  <h5 className="fw-bold text-primary mb-3">Personal Information</h5>
                  <ul className="list-group mb-4">
                    <li className="list-group-item"><strong>First Name:</strong> {formData.firstName}</li>
                    <li className="list-group-item"><strong>Middle Name:</strong> {formData.middleName || "N/A"}</li>
                    <li className="list-group-item"><strong>Last Name:</strong> {formData.lastName}</li>
                    <li className="list-group-item"><strong>Suffix:</strong> {formData.suffix || "N/A"}</li>
                    <li className="list-group-item"><strong>Gender:</strong> {formData.gender}</li>
                    <li className="list-group-item"><strong>Birthday:</strong> {formData.birthday}</li>
                  </ul>

                  <h5 className="fw-bold text-primary mb-3">Contact Information</h5>
                  <ul className="list-group mb-4">
                    <li className="list-group-item"><strong>Email:</strong> {formData.email}</li>
                    <li className="list-group-item"><strong>Phone Number:</strong> +63 {formData.phone}</li>
                  </ul>
                </div>

                {/* RIGHT SIDE – Address & ID Info */}
                <div className="col-md-6 ps-4">
                  <h5 className="fw-bold text-primary mb-3">Address Information</h5>
                  <ul className="list-group mb-4">
                    <li className="list-group-item"><strong>Street:</strong> {formData.street}</li>
                    <li className="list-group-item"><strong>Barangay:</strong> {formData.barangay}</li>
                    <li className="list-group-item"><strong>Municipality:</strong> {formData.municipality}</li>
                    <li className="list-group-item"><strong>Province:</strong> {formData.province}</li>
                    <li className="list-group-item"><strong>Region:</strong> {formData.region}</li>
                    <li className="list-group-item"><strong>Country:</strong> {formData.country}</li>
                    <li className="list-group-item"><strong>Postal Code:</strong> {formData.postal || "N/A"}</li>
                    <li className="list-group-item"><strong>Foreign Address:</strong> {formData.foreignAddress || "N/A"}</li>
                  </ul>

                  <h5 className="fw-bold text-primary mb-3">Verification Details</h5>
                  <ul className="list-group">
                    <li className="list-group-item"><strong>Valid ID:</strong> {formData.validID || "Not selected"}</li>
                    <li className="list-group-item"><strong>Biometric:</strong> Completed</li>
                    <li className="list-group-item"><strong>Documents Uploaded:</strong> Valid ID & Birth Certificate</li>
                  </ul>
                </div>
              </div>

              {/* Submit Confirmation */}
              <div className="alert alert-warning mt-4 small text-center">
                ⚠️ Please make sure all details are correct. Once submitted, changes cannot be made.
              </div>

              {/* Navigation Buttons */}
              <div className="d-flex justify-content-between mt-4">
                <button
                  type="button"
                  className="btn btn-secondary px-4"
                  onClick={handlePrev}
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="btn btn-success px-4"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}