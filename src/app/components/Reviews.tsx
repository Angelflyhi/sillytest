const reviews = [
  {
    id: 1,
    name: "Zoe K.",
    avatar: "🦋",
    text: "I got the daisy bucket hat and I've worn it every single day. Everyone asks me where I got it!",
    stars: 5,
    product: "Daisy Bucket Hat",
    bg: "#FF3A8C",
  },
  {
    id: 2,
    name: "Marcus T.",
    avatar: "🌈",
    text: "The sticker pack is unreal. Covered my whole laptop. Such amazing quality and the designs are SO unique.",
    stars: 5,
    product: "Funky Sticker Pack",
    bg: "#F5FF2B",
  },
  {
    id: 3,
    name: "Priya S.",
    avatar: "🌸",
    text: "Shipping was fast, packaging was adorable, and the tote bag is even better in person. 10/10 would recommend!",
    stars: 5,
    product: "Rainbow Tote Bag",
    bg: "#00C78C",
  },
  {
    id: 4,
    name: "Alex R.",
    avatar: "⚡",
    text: "These are the most fun accessories I've ever owned. Every item is such amazing quality. Already ordering more!",
    stars: 5,
    product: "Enamel Pin Set",
    bg: "#FF7A45",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-2">
      {Array(5).fill(null).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill={i < count ? "#F5FF2B" : "#ddd"}>
          <path d="M8 1L9.85 6.08H15.18L10.85 9.17L12.7 14.25L8 11.16L3.3 14.25L5.15 9.17L0.82 6.08H6.15L8 1Z" stroke="#000" strokeWidth="1"/>
        </svg>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section
      style={{
        backgroundColor: "#fff",
        borderTop: "3px solid #000",
        borderBottom: "3px solid #000",
        padding: "60px 0",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              backgroundColor: "#000",
              color: "#F5FF2B",
              padding: "8px 24px",
              borderRadius: "6px",
              marginBottom: "8px",
            }}
          >
            <span style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(24px, 3vw, 38px)", letterSpacing: "2px", textTransform: "uppercase" }}>
              PEOPLE ARE OBSESSED
            </span>
          </div>
          <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "15px", color: "#666", marginTop: "8px" }}>
            Over 10,000+ happy weirdos and counting ✨
          </p>
          {/* Overall rating */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex gap-0.5">
              {Array(5).fill(null).map((_, i) => (
                <svg key={i} width="24" height="24" viewBox="0 0 16 16" fill="#F5FF2B">
                  <path d="M8 1L9.85 6.08H15.18L10.85 9.17L12.7 14.25L8 11.16L3.3 14.25L5.15 9.17L0.82 6.08H6.15L8 1Z" stroke="#000" strokeWidth="1"/>
                </svg>
              ))}
            </div>
            <span style={{ fontFamily: "Anton, sans-serif", fontSize: "28px", color: "#000" }}>4.9</span>
            <span style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "14px", color: "#666" }}>
              (2,847 reviews)
            </span>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review) => (
            <div
              key={review.id}
              style={{
                backgroundColor: review.bg,
                border: "3px solid #000",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "5px 5px 0 #000",
                position: "relative",
              }}
            >
              {/* Quote mark */}
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "16px",
                  fontFamily: "Georgia, serif",
                  fontSize: "48px",
                  color: "rgba(0,0,0,0.12)",
                  lineHeight: 1,
                }}
              >
                "
              </div>

              <Stars count={review.stars} />
              <p
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontWeight: 700,
                  fontSize: "13px",
                  color: "#000",
                  lineHeight: 1.6,
                  marginBottom: "16px",
                }}
              >
                "{review.text}"
              </p>
              <div style={{ borderTop: "2px solid rgba(0,0,0,0.2)", paddingTop: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    backgroundColor: "#fff",
                    border: "2px solid #000",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                    flexShrink: 0,
                  }}
                >
                  {review.avatar}
                </div>
                <div>
                  <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, fontSize: "13px", color: "#000", margin: 0 }}>
                    {review.name}
                  </p>
                  <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 600, fontSize: "11px", color: "rgba(0,0,0,0.6)", margin: 0 }}>
                    Bought: {review.product}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
