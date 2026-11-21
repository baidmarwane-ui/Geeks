import React, { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{
      background: "#ffffff",
      borderRadius: "16px",
      padding: "40px 24px",
      maxWidth: "560px",
      margin: "40px auto 60px",
      boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
      textAlign: "center"
    }}>
      <h2 style={{ fontSize: "28px", color: "#0f172a", marginBottom: "8px" }}>Contact Us</h2>
      <p style={{ color: "#64748b", marginBottom: "24px" }}>
        Have questions or want to partner with us? Reach out anytime!
      </p>

      {submitted ? (
        <div style={{ padding: "16px", background: "#ecfdf5", color: "#065f46", borderRadius: "8px", fontWeight: "600" }}>
          Thank you! Your message has been sent successfully.
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px", textAlign: "left" }}>
          <div>
            <label style={{ display: "block", fontSize: "14px", fontWeight: "600", color: "#334155", marginBottom: "4px" }}>Name</label>
            <input
              type="text"
              required
              placeholder="Your full name"
              style={{ width: "100%", boxSizing: "border-box", padding: "10px 14px", borderRadius: "8px", border: "1px solid #cbd5e1" }}
            />
          </div>
          <div>
            <label style={{ display: "block", fontSize: "14px", fontWeight: "600", color: "#334155", marginBottom: "4px" }}>Email</label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              style={{ width: "100%", boxSizing: "border-box", padding: "10px 14px", borderRadius: "8px", border: "1px solid #cbd5e1" }}
            />
          </div>
          <div>
            <label style={{ display: "block", fontSize: "14px", fontWeight: "600", color: "#334155", marginBottom: "4px" }}>Message</label>
            <textarea
              rows="4"
              required
              placeholder="How can we help you?"
              style={{ width: "100%", boxSizing: "border-box", padding: "10px 14px", borderRadius: "8px", border: "1px solid #cbd5e1" }}
            ></textarea>
          </div>
          <button
            type="submit"
            style={{
              background: "#0284c7",
              color: "#ffffff",
              padding: "12px",
              borderRadius: "8px",
              border: "none",
              fontWeight: "700",
              cursor: "pointer",
              fontSize: "16px",
              marginTop: "8px"
            }}
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
}

export default Contact;
