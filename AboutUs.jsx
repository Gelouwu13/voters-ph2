import React from "react";
import "./AboutUs.css"; // create a CSS file for styling

export default function AboutUs() {
  // Example team members; replace src with actual images
  const teamMembers = [
    { name: "Alice", role: "Frontend Developer", src: "https://via.placeholder.com/150" },
    { name: "Bob", role: "Backend Developer", src: "https://via.placeholder.com/150" },
    { name: "Charlie", role: "UI/UX Designer", src: "https://via.placeholder.com/150" },
    { name: "David", role: "Project Manager", src: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="about-us-page container py-5">
      {/* About Section */}
      <section className="about-text text-center mb-5">
        <h1 className="fw-bold mb-3">About Us</h1>
        <p className="lead">
          We are a group of developers aiming to provide innovative IT solutions that help
          businesses and individuals achieve more. Our team is dedicated, creative, and
          passionate about technology and problem-solving.
        </p>
      </section>

      {/* The Team Section */}
      <section className="team-section text-center">
        <h2 className="fw-bold mb-4">The Team</h2>
        <div className="team-members d-flex flex-wrap justify-content-center gap-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member card p-3" style={{ width: "200px" }}>
              <img
                src={member.src}
                alt={member.name}
                className="team-photo rounded-circle mb-3"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <h5 className="fw-bold">{member.name}</h5>
              <p className="text-muted">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
