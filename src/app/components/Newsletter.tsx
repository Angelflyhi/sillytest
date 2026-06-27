import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section
      style={{
        backgroundColor: "#000",
        borderTop: "3px solid #000",
        padding: "60px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Checker corners */}
      <div style={{ position: "absolute", top: 0, left: 0, display: "grid", gridTemplateColumns: "repeat(5, 20px)", gridTemplateRows: "repeat(5, 20px)", opacity: 0.3 }}>
        {Array(25).fill(null).map((_, i) => (
          <div key={i} style={{ backgroundColor: (Math.floor(i / 5) + i % 5) % 2 === 0 ? "#F5FF2B" : "transparent" }} />
        ))}
      </div>
      <div style={{ position: "absolute", bottom: 0, right: 0, display: "grid", gridTemplateColumns: "repeat(5, 20px)", gridTemplateRows: "repeat(5, 20px)", opacity: 0.3 }}>
        {Array(25).fill(null).map((_, i) => (
          <div key={i} style={{ backgroundColor: (Math.floor(i / 5) + i % 5) % 2 === 0 ? "#FF3A8C" : "transparent" }} />
        ))}
      </div>

      <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
        <div
          style={{
            display: "inline-block",
            backgroundColor: "#FF3A8C",
            border: "3px solid #F5FF2B",
            borderRadius: "8px",
            padding: "4px 16px",
            marginBottom: "16px",
          }}
        >
          <span style={{ fontFamily: "Anton, sans-serif", fontSize: "14px", letterSpacing: "3px", color: "#F5FF2B", textTransform: "uppercase" }}>
            JOIN THE WEIRD CLUB
          </span>
        </div>

        <h2
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: "clamp(28px, 5vw, 52px)",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#F5FF2B",
            lineHeight: 1.1,
            marginBottom: "12px",
          }}
        >
          GET 10% OFF<br />YOUR FIRST ORDER
        </h2>

        <p
          style={{
            fontFamily: "Nunito, sans-serif",
            fontWeight: 700,
            fontSize: "15px",
            color: "rgba(255,255,255,0.8)",
            marginBottom: "28px",
          }}
        >
          Plus be the first to know about new drops, restocks, and exclusive deals 🎉
        </p>

        {submitted ? (
          <div
            style={{
              backgroundColor: "#F5FF2B",
              border: "3px solid #000",
              borderRadius: "8px",
              padding: "16px 24px",
              boxShadow: "5px 5px 0 #FF3A8C",
            }}
          >
            <p style={{ fontFamily: "Anton, sans-serif", fontSize: "22px", color: "#000", letterSpacing: "1px" }}>
              YOU'RE IN! CHECK YOUR EMAIL 🎉
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              style={{
                fontFamily: "Nunito, sans-serif",
                fontWeight: 700,
                fontSize: "15px",
                padding: "12px 20px",
                border: "3px solid #F5FF2B",
                borderRadius: "6px",
                backgroundColor: "rgba(255,255,255,0.1)",
                color: "#fff",
                outline: "none",
                flex: 1,
                maxWidth: "320px",
              }}
            />
            <button
              type="submit"
              style={{
                fontFamily: "Anton, sans-serif",
                letterSpacing: "2px",
                fontSize: "15px",
                backgroundColor: "#F5FF2B",
                color: "#000",
                border: "3px solid #F5FF2B",
                borderRadius: "6px",
                padding: "12px 28px",
                cursor: "pointer",
                boxShadow: "4px 4px 0 #FF3A8C",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              GET MY 10% OFF →
            </button>
          </form>
        )}

        <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.4)", marginTop: "16px" }}>
          No spam ever. Unsubscribe anytime. We're weird not annoying.
        </p>
      </div>
    </section>
  );
}
