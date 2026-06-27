import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Announcement bar */}
      <div
        style={{ backgroundColor: "#F5FF2B", borderBottom: "2px solid #000" }}
        className="w-full py-2 overflow-hidden"
      >
        <div className="flex animate-[marquee_18s_linear_infinite] whitespace-nowrap">
          {Array(4).fill(null).map((_, i) => (
            <span key={i} className="mx-8 text-black font-bold tracking-widest uppercase text-sm" style={{ fontFamily: "Nunito, sans-serif" }}>
              🌟 FREE SHIPPING ON ORDERS OVER $50 &nbsp;✦&nbsp; NEW DROPS EVERY FRIDAY &nbsp;✦&nbsp; USE CODE WEIRD10 FOR 10% OFF &nbsp;✦&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Main nav */}
      <header
        style={{ backgroundColor: "#fff", borderBottom: "3px solid #000" }}
        className="w-full sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 select-none">
            <div
              style={{
                backgroundColor: "#F5FF2B",
                border: "3px solid #000",
                borderRadius: "6px",
                padding: "4px 10px",
                transform: "rotate(-2deg)",
                boxShadow: "3px 3px 0 #000",
              }}
            >
              <span
                style={{
                  fontFamily: "Anton, sans-serif",
                  fontSize: "20px",
                  letterSpacing: "2px",
                  color: "#000",
                  textTransform: "uppercase",
                }}
              >
                UGLY BAGS
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["SHOP", "ABOUT", "BLOG", "CONTACT"].map((item) => (
              <a
                key={item}
                href="#"
                style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800 }}
                className="text-black uppercase tracking-widest text-sm hover:underline decoration-2 underline-offset-4 transition-all"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <button
              style={{
                border: "2px solid #000",
                borderRadius: "50%",
                padding: "8px",
                background: "#fff",
                boxShadow: "2px 2px 0 #000",
                cursor: "pointer",
                position: "relative",
              }}
              aria-label="Cart"
            >
              <ShoppingCart size={18} strokeWidth={2.5} />
              <span
                style={{
                  position: "absolute",
                  top: "-6px",
                  right: "-6px",
                  backgroundColor: "#FF3A8C",
                  color: "#fff",
                  borderRadius: "50%",
                  width: "18px",
                  height: "18px",
                  fontSize: "10px",
                  fontWeight: 900,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1.5px solid #000",
                  fontFamily: "Nunito, sans-serif",
                }}
              >
                3
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            style={{ borderTop: "2px solid #000", backgroundColor: "#fff" }}
            className="md:hidden px-4 py-4 flex flex-col gap-4"
          >
            {["SHOP", "ABOUT", "BLOG", "CONTACT"].map((item) => (
              <a
                key={item}
                href="#"
                style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800 }}
                className="text-black uppercase tracking-widest text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </>
  );
}
