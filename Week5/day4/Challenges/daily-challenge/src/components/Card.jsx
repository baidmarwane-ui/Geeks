import React from "react";

function Card({ icon, title, description }) {
  return (
    <div style={{
      background: "#ffffff",
      borderRadius: "12px",
      padding: "28px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
      textAlign: "center",
      border: "1px solid #e2e8f0",
      transition: "transform 0.2s"
    }}>
      <div style={{ fontSize: "40px", marginBottom: "16px" }}>{icon}</div>
      <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#0f172a", marginBottom: "10px" }}>
        {title}
      </h3>
      <p style={{ color: "#64748b", fontSize: "15px", lineHeight: "1.6", margin: 0 }}>
        {description}
      </p>
    </div>
  );
}

export default Card;
