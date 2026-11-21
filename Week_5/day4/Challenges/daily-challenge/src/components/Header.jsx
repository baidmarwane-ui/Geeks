import React from "react";

function Header() {
  return (
    <header style={{
      background: "#1e293b",
      color: "#ffffff",
      padding: "16px 32px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
    }}>
      <div style={{ fontSize: "20px", fontWeight: "bold", letterSpacing: "1px", color: "#38bdf8" }}>
        ⚡ LandingPro
      </div>
      <nav>
        <ul style={{ listStyle: "none", display: "flex", gap: "24px", margin: 0, padding: 0 }}>
          <li><a href="#home" style={{ color: "#ffffff", textDecoration: "none", fontWeight: "500" }}>Home</a></li>
          <li><a href="#features" style={{ color: "#ffffff", textDecoration: "none", fontWeight: "500" }}>Features</a></li>
          <li><a href="#contact" style={{ color: "#ffffff", textDecoration: "none", fontWeight: "500" }}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
