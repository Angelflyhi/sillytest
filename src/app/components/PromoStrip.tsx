export function PromoStrip() {
  const items = [
    "✦ WEIRD IS WONDERFUL",
    "✦ BE UNAPOLOGETICALLY YOU",
    "✦ STAND OUT NOT IN",
    "✦ WEIRD IS WONDERFUL",
    "✦ BE UNAPOLOGETICALLY YOU",
    "✦ STAND OUT NOT IN",
  ];

  return (
    <div
      style={{
        backgroundColor: "#FF3A8C",
        borderTop: "3px solid #000",
        borderBottom: "3px solid #000",
        padding: "14px 0",
        overflow: "hidden",
      }}
    >
      <div className="flex animate-[marquee2_20s_linear_infinite] whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: "16px",
              letterSpacing: "3px",
              color: "#fff",
              marginRight: "48px",
              textTransform: "uppercase",
            }}
          >
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee2 {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
