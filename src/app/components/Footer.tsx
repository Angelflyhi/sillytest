export function Footer() {
  const links = {
    SHOP: ["New Arrivals", "Bags", "Hats", "Pins & Patches", "Stickers", "Sale"],
    HELP: ["FAQ", "Shipping Info", "Returns", "Size Guide", "Track Order"],
    ABOUT: ["Our Story", "Sustainability", "Press", "Careers", "Blog"],
  };

  return (
    <footer style={{ backgroundColor: "#111", borderTop: "3px solid #F5FF2B" }}>
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand col */}
          <div>
            <div
              style={{
                display: "inline-block",
                backgroundColor: "#F5FF2B",
                border: "3px solid #fff",
                borderRadius: "6px",
                padding: "4px 10px",
                transform: "rotate(-2deg)",
                marginBottom: "16px",
              }}
            >
              <span style={{ fontFamily: "Anton, sans-serif", fontSize: "18px", letterSpacing: "2px", color: "#000" }}>
                UGLY BAGS
              </span>
            </div>
            <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 600, fontSize: "13px", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginTop: "8px" }}>
              Making the world weirder, one bag at a time. Designed for the boldly different. 🌈
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              {[
                { label: "Instagram", icon: "📸" },
                { label: "TikTok", icon: "🎵" },
                { label: "Pinterest", icon: "📌" },
                { label: "Twitter/X", icon: "✖" },
              ].map((social) => (
                <button
                  key={social.label}
                  aria-label={social.label}
                  style={{
                    width: "36px",
                    height: "36px",
                    backgroundColor: "#222",
                    border: "2px solid #F5FF2B",
                    borderRadius: "6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4
                style={{
                  fontFamily: "Anton, sans-serif",
                  fontSize: "16px",
                  letterSpacing: "2px",
                  color: "#F5FF2B",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                {heading}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      style={{
                        fontFamily: "Nunito, sans-serif",
                        fontWeight: 600,
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.6)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseOver={e => { (e.currentTarget as HTMLElement).style.color = "#FF3A8C"; }}
                      onMouseOut={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)"; }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "2px solid rgba(255,255,255,0.1)",
          padding: "16px",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ fontFamily: "Nunito, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.35)", margin: 0 }}>
            © 2026 Ugly Bags Co. All rights reserved. Made with 💛 and a lot of chaos.
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a key={item} href="#" style={{ fontFamily: "Nunito, sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Checker bottom strip */}
      <div style={{ display: "flex", overflow: "hidden" }}>
        {Array(50).fill(null).map((_, i) => (
          <div key={i} style={{ width: "30px", height: "12px", flexShrink: 0, backgroundColor: i % 2 === 0 ? "#F5FF2B" : "#FF3A8C" }} />
        ))}
      </div>
    </footer>
  );
}
