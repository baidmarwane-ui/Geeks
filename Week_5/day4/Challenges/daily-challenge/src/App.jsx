import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Contact from "./components/Contact";

function App() {
  const features = [
    {
      icon: "⚡",
      title: "Fast Performance",
      description: "Engineered for speed, our modern stack ensures near-instantaneous load times and seamless interactions."
    },
    {
      icon: "🎯",
      title: "Easy to Use",
      description: "Intuitive API and component design that allows beginners and pros alike to build faster with zero friction."
    },
    {
      icon: "🎨",
      title: "Modern Design",
      description: "Clean, responsive layouts crafted with Tailwind CSS principles that look great on any device size."
    }
  ];

  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif", background: "#f8fafc", minHeight: "100vh", color: "#1e293b" }}>
      <Header />

      {/* Hero Section */}
      <section id="home" style={{ textAlign: "center", padding: "60px 20px 40px", maxWidth: "720px", margin: "auto" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "800", color: "#0f172a", marginBottom: "16px", lineHeight: "1.2" }}>
          Build Faster with <span style={{ color: "#0284c7" }}>Modern React</span>
        </h1>
        <p style={{ fontSize: "18px", color: "#64748b", lineHeight: "1.6", marginBottom: "28px" }}>
          Deliver delightful, high-performance web applications with modular components and clean responsive styling.
        </p>
        <a
          href="#features"
          style={{
            background: "#0284c7",
            color: "white",
            padding: "12px 28px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "700",
            display: "inline-block"
          }}
        >
          Explore Features
        </a>
      </section>

      {/* Feature Cards Section */}
      <section id="features" style={{ maxWidth: "1080px", margin: "auto", padding: "40px 20px" }}>
        <h2 style={{ textAlign: "center", fontSize: "30px", marginBottom: "36px", color: "#0f172a" }}>
          Key Features
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px"
        }}>
          {features.map((feature, idx) => (
            <Card
              key={idx}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      <footer style={{ textAlign: "center", padding: "20px", color: "#94a3b8", fontSize: "14px", borderTop: "1px solid #e2e8f0" }}>
        © 2026 LandingPro. Built with React & Pair Programming.
      </footer>
    </div>
  );
}

export default App;
