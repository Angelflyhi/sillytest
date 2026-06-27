import { ImageWithFallback } from "./figma/ImageWithFallback";

const bagImg = "https://images.unsplash.com/photo-1570993868197-c16e5e347fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400";

function CheckerBlock() {
  return (
    <div style={{ display: "inline-grid", gridTemplateColumns: "repeat(6, 18px)", gridTemplateRows: "repeat(6, 18px)", border: "2px solid #000", borderRadius: "4px", overflow: "hidden", flexShrink: 0 }}>
      {Array(36).fill(null).map((_, i) => (
        <div key={i} style={{ backgroundColor: (Math.floor(i / 6) + i % 6) % 2 === 0 ? "#000" : "#F5FF2B" }} />
      ))}
    </div>
  );
}

export function MidPromo() {
  return (
    <section
      style={{
        backgroundColor: "#F5FF2B",
        borderBottom: "3px solid #000",
        padding: "60px 0",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-12">
        {/* Left: image */}
        <div className="flex-1 flex justify-center">
          <div
            style={{
              position: "relative",
              width: "300px",
              height: "320px",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                border: "3px solid #000",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "8px 8px 0 #000",
                transform: "rotate(-3deg)",
              }}
            >
              <ImageWithFallback
                src={bagImg}
                alt="Colorful bags"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            {/* decorative badge */}
            <div
              style={{
                position: "absolute",
                top: "-20px",
                right: "-20px",
                width: "80px",
                height: "80px",
                backgroundColor: "#FF3A8C",
                border: "3px solid #000",
                borderRadius: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10,
                boxShadow: "3px 3px 0 #000",
                transform: "rotate(15deg)",
              }}
            >
              <span style={{ fontFamily: "Anton, sans-serif", fontSize: "10px", color: "#fff", letterSpacing: "1px", textAlign: "center", lineHeight: 1.2 }}>
                HAND<br/>MADE ❤️
              </span>
            </div>
          </div>
        </div>

        {/* Right: text */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <CheckerBlock />
            <CheckerBlock />
          </div>

          <h2
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: "#000",
              lineHeight: 1.1,
              marginBottom: "16px",
            }}
          >
            WE MAKE EVERY DAY<br />
            <span
              style={{
                backgroundColor: "#FF3A8C",
                color: "#fff",
                padding: "0 8px",
                borderRadius: "4px",
                border: "2px solid #000",
              }}
            >
              A LITTLE LOUDER
            </span>
          </h2>

          <p
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              color: "#333",
              lineHeight: 1.7,
              marginBottom: "24px",
              maxWidth: "440px",
            }}
          >
            Our bags, pins, stickers and accessories are designed for the weirdos,
            the dreamers, and the bold. Every item is crafted with love and a
            healthy dose of chaos. 🌀
          </p>

          {/* Features list */}
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              "✦  Eco-friendly materials",
              "✦  Limited edition drops",
              "✦  Ships worldwide 🌍",
              "✦  Satisfaction guaranteed",
            ].map((item, i) => (
              <li key={i} style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, fontSize: "14px", color: "#000", display: "flex", alignItems: "center", gap: "8px" }}>
                {item}
              </li>
            ))}
          </ul>

          <button
            style={{
              marginTop: "28px",
              fontFamily: "Anton, sans-serif",
              letterSpacing: "2px",
              fontSize: "15px",
              backgroundColor: "#000",
              color: "#F5FF2B",
              border: "3px solid #000",
              borderRadius: "6px",
              padding: "12px 28px",
              cursor: "pointer",
              boxShadow: "5px 5px 0 #FF3A8C",
              textTransform: "uppercase",
            }}
          >
            LEARN OUR STORY →
          </button>
        </div>
      </div>
    </section>
  );
}
