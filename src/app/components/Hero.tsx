import { ImageWithFallback } from "./figma/ImageWithFallback";

const hatImg = "https://images.unsplash.com/photo-1627608015915-e55c3c6fafb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGJ1Y2tldCUyMGhhdCUyMHN0cmVldHdlYXJ8ZW58MXx8fHwxNzgyNTU1Mjc3fDA&ixlib=rb-4.1.0&q=80&w=400";
const bagImg = "https://images.unsplash.com/photo-1660695828417-9cc2724bf656?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHRvdGUlMjBiYWclMjBmYXNoaW9uJTIwYWNjZXNzb3JpZXN8ZW58MXx8fHwxNzgyNTU1Mjc4fDA&ixlib=rb-4.1.0&q=80&w=400";
const plantImg = "https://images.unsplash.com/photo-1572186192734-e82b57dc4435?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwcGxhbnQlMjBob3VzZXBsYW50JTIwcXVpcmt5JTIwY29sb3JmdWx8ZW58MXx8fHwxNzgyNTU1MjgyfDA&ixlib=rb-4.1.0&q=80&w=300";
const pinsImg = "https://images.unsplash.com/photo-1574097638739-725b61f511a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjdXRlJTIwZW5hbWVsJTIwcGlucyUyMHN0aWNrZXJzJTIwYWNjZXNzb3JpZXN8ZW58MXx8fHwxNzgyNTU1Mjc4fDA&ixlib=rb-4.1.0&q=80&w=300";

// Ghost mascot SVG
function GhostMascot() {
  return (
    <svg width="120" height="140" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="60" rx="50" ry="55" fill="#F5FF2B" stroke="#000" strokeWidth="3"/>
      <path d="M10 85 Q10 115 25 115 Q35 105 45 115 Q55 125 60 115 Q65 125 75 115 Q85 105 95 115 Q110 115 110 85 L110 60 Q110 5 60 5 Q10 5 10 60 Z" fill="#F5FF2B" stroke="#000" strokeWidth="3"/>
      {/* X eyes */}
      <line x1="38" y1="50" x2="48" y2="60" stroke="#000" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="48" y1="50" x2="38" y2="60" stroke="#000" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="72" y1="50" x2="82" y2="60" stroke="#000" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="82" y1="50" x2="72" y2="60" stroke="#000" strokeWidth="3.5" strokeLinecap="round"/>
      {/* Smile */}
      <path d="M45 75 Q60 88 75 75" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* Cheek blush */}
      <ellipse cx="35" cy="70" rx="7" ry="4" fill="#FF3A8C" opacity="0.5"/>
      <ellipse cx="85" cy="70" rx="7" ry="4" fill="#FF3A8C" opacity="0.5"/>
    </svg>
  );
}

// Star doodle
function StarDoodle({ size = 30, color = "#FF3A8C", rotation = 0 }: { size?: number; color?: string; rotation?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" fill="none" style={{ transform: `rotate(${rotation}deg)` }}>
      <path d="M15 1L18.09 11.26H29L20.45 17.49L23.54 27.75L15 21.52L6.46 27.75L9.55 17.49L1 11.26H11.91L15 1Z" fill={color} stroke="#000" strokeWidth="1.5"/>
    </svg>
  );
}

// Squiggle underline
function SquiggleUnderline({ color = "#FF3A8C" }: { color?: string }) {
  return (
    <svg width="220" height="16" viewBox="0 0 220 16" fill="none" className="w-full max-w-xs">
      <path d="M2 12 C20 4, 40 16, 60 8 C80 0, 100 14, 120 8 C140 2, 160 14, 180 8 C200 2, 210 12, 218 8" stroke={color} strokeWidth="3.5" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

// Checkerboard tile
function CheckerTile({ size = 60 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60">
      <rect width="30" height="30" fill="#000"/>
      <rect x="30" width="30" height="30" fill="#fff"/>
      <rect y="30" width="30" height="30" fill="#fff"/>
      <rect x="30" y="30" width="30" height="30" fill="#000"/>
    </svg>
  );
}

export function Hero() {
  return (
    <section
      style={{ backgroundColor: "#fff", borderBottom: "3px solid #000", overflow: "hidden" }}
      className="relative"
    >
      {/* Checkerboard strips on edges */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "60px", overflow: "hidden", opacity: 0.15 }}>
        {Array(20).fill(null).map((_, i) => <CheckerTile key={i} />)}
      </div>
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "60px", overflow: "hidden", opacity: 0.15 }}>
        {Array(20).fill(null).map((_, i) => <CheckerTile key={i} />)}
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-16 py-8 md:py-12 flex flex-col md:flex-row items-center gap-8">
        {/* Left: Text content */}
        <div className="flex-1 z-10">
          {/* Decorative stars */}
          <div className="flex gap-3 mb-4">
            <StarDoodle size={28} color="#F5FF2B" rotation={15} />
            <StarDoodle size={22} color="#FF3A8C" rotation={-10} />
            <StarDoodle size={18} color="#00C78C" rotation={30} />
          </div>

          {/* Main headline */}
          <div className="relative inline-block mb-2">
            <h1
              style={{
                fontFamily: "Anton, sans-serif",
                fontSize: "clamp(52px, 8vw, 88px)",
                lineHeight: 1,
                color: "#000",
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              NORMAL
            </h1>
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: "#F5FF2B",
              border: "3px solid #000",
              borderRadius: "8px",
              padding: "2px 12px",
              marginBottom: "8px",
              boxShadow: "4px 4px 0 #000",
              transform: "rotate(-1deg)",
            }}
          >
            <span
              style={{
                fontFamily: "Anton, sans-serif",
                fontSize: "clamp(52px, 8vw, 88px)",
                lineHeight: 1,
                color: "#000",
                textTransform: "uppercase",
              }}
            >
              IS
            </span>
          </div>

          <div>
            <h1
              style={{
                fontFamily: "Anton, sans-serif",
                fontSize: "clamp(52px, 8vw, 88px)",
                lineHeight: 1,
                color: "#000",
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              BORING
            </h1>
            <SquiggleUnderline color="#FF3A8C" />
          </div>

          {/* Sub copy */}
          <p
            style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "16px", color: "#333" }}
            className="mt-4 mb-6 max-w-sm"
          >
            We make weird, wonderful bags & accessories for people who refuse to blend in. 🌈
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              style={{
                fontFamily: "Anton, sans-serif",
                letterSpacing: "2px",
                fontSize: "16px",
                backgroundColor: "#F5FF2B",
                color: "#000",
                border: "3px solid #000",
                borderRadius: "6px",
                padding: "12px 28px",
                cursor: "pointer",
                boxShadow: "5px 5px 0 #000",
                transform: "rotate(-1deg)",
                textTransform: "uppercase",
                transition: "transform 0.1s, box-shadow 0.1s",
              }}
              onMouseOver={e => {
                (e.currentTarget as HTMLElement).style.transform = "rotate(-1deg) translate(-2px,-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "7px 7px 0 #000";
              }}
              onMouseOut={e => {
                (e.currentTarget as HTMLElement).style.transform = "rotate(-1deg)";
                (e.currentTarget as HTMLElement).style.boxShadow = "5px 5px 0 #000";
              }}
            >
              SHOP NOW →
            </button>
            <button
              style={{
                fontFamily: "Anton, sans-serif",
                letterSpacing: "2px",
                fontSize: "16px",
                backgroundColor: "#FF3A8C",
                color: "#fff",
                border: "3px solid #000",
                borderRadius: "6px",
                padding: "12px 28px",
                cursor: "pointer",
                boxShadow: "5px 5px 0 #000",
                textTransform: "uppercase",
              }}
            >
              OUR FAVES
            </button>
          </div>
        </div>

        {/* Right: Collage */}
        <div className="flex-1 relative flex items-center justify-center min-h-[380px] md:min-h-[480px]">
          {/* Large ghost mascot */}
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -55%)", zIndex: 5 }}>
            <GhostMascot />
          </div>

          {/* Hat image card */}
          <div
            style={{
              position: "absolute",
              top: "5%",
              left: "0%",
              width: "150px",
              border: "3px solid #000",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "5px 5px 0 #000",
              transform: "rotate(-5deg)",
              backgroundColor: "#FF3A8C",
              zIndex: 3,
            }}
          >
            <ImageWithFallback src={hatImg} alt="Colorful hat" style={{ width: "100%", height: "120px", objectFit: "cover", display: "block" }} />
            <div style={{ padding: "6px 8px", fontFamily: "Nunito, sans-serif", fontWeight: 800, fontSize: "11px", backgroundColor: "#FF3A8C", color: "#fff" }}>
              BUCKET HAT 🧢
            </div>
          </div>

          {/* Bag image card */}
          <div
            style={{
              position: "absolute",
              bottom: "5%",
              right: "0%",
              width: "140px",
              border: "3px solid #000",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "5px 5px 0 #000",
              transform: "rotate(4deg)",
              backgroundColor: "#00C78C",
              zIndex: 3,
            }}
          >
            <ImageWithFallback src={bagImg} alt="Colorful bag" style={{ width: "100%", height: "110px", objectFit: "cover", display: "block" }} />
            <div style={{ padding: "6px 8px", fontFamily: "Nunito, sans-serif", fontWeight: 800, fontSize: "11px", backgroundColor: "#00C78C", color: "#000" }}>
              TOTE BAG 🛍️
            </div>
          </div>

          {/* Plant card */}
          <div
            style={{
              position: "absolute",
              bottom: "8%",
              left: "3%",
              width: "110px",
              border: "3px solid #000",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "4px 4px 0 #000",
              transform: "rotate(6deg)",
              backgroundColor: "#F5FF2B",
              zIndex: 2,
            }}
          >
            <ImageWithFallback src={plantImg} alt="Cute plant" style={{ width: "100%", height: "100px", objectFit: "cover", display: "block" }} />
          </div>

          {/* Pins card */}
          <div
            style={{
              position: "absolute",
              top: "8%",
              right: "5%",
              width: "120px",
              border: "3px solid #000",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "4px 4px 0 #000",
              transform: "rotate(-3deg)",
              backgroundColor: "#fff",
              zIndex: 2,
            }}
          >
            <ImageWithFallback src={pinsImg} alt="Enamel pins" style={{ width: "100%", height: "100px", objectFit: "cover", display: "block" }} />
            <div style={{ padding: "4px 8px", fontFamily: "Nunito, sans-serif", fontWeight: 800, fontSize: "10px" }}>PINS 📌</div>
          </div>

          {/* Floating doodles */}
          <div style={{ position: "absolute", top: "12%", left: "38%", zIndex: 10 }}>
            <StarDoodle size={32} color="#F5FF2B" rotation={20} />
          </div>
          <div style={{ position: "absolute", bottom: "20%", right: "20%", zIndex: 10 }}>
            <StarDoodle size={24} color="#FF3A8C" rotation={-15} />
          </div>
          <div style={{ position: "absolute", top: "38%", right: "2%", zIndex: 10 }}>
            <StarDoodle size={20} color="#00C78C" rotation={35} />
          </div>

          {/* Checkerboard square decoration */}
          <div
            style={{
              position: "absolute",
              top: "30%",
              left: "10%",
              width: "70px",
              height: "70px",
              border: "3px solid #000",
              borderRadius: "8px",
              overflow: "hidden",
              zIndex: 1,
              transform: "rotate(12deg)",
              opacity: 0.7,
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridTemplateRows: "repeat(4, 1fr)", width: "100%", height: "100%" }}>
              {Array(16).fill(null).map((_, i) => (
                <div key={i} style={{ backgroundColor: (Math.floor(i / 4) + i % 4) % 2 === 0 ? "#000" : "#fff" }} />
              ))}
            </div>
          </div>

          {/* Sticker badge */}
          <div
            style={{
              position: "absolute",
              bottom: "28%",
              right: "8%",
              backgroundColor: "#FF3A8C",
              border: "3px solid #000",
              borderRadius: "50%",
              width: "70px",
              height: "70px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              transform: "rotate(12deg)",
              boxShadow: "3px 3px 0 #000",
              zIndex: 8,
            }}
          >
            <span style={{ fontFamily: "Anton, sans-serif", fontSize: "11px", color: "#fff", lineHeight: 1.1, textAlign: "center", letterSpacing: "1px" }}>
              NEW<br/>DROP!
            </span>
          </div>
        </div>
      </div>

      {/* Bottom checker strip */}
      <div style={{ display: "flex", borderTop: "3px solid #000", overflow: "hidden" }}>
        {Array(40).fill(null).map((_, i) => (
          <div key={i} style={{ width: "40px", height: "20px", flexShrink: 0, backgroundColor: i % 2 === 0 ? "#000" : "#F5FF2B" }} />
        ))}
      </div>
    </section>
  );
}
