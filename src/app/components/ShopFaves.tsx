import { ImageWithFallback } from "./figma/ImageWithFallback";

const products = [
  {
    id: 1,
    name: "Daisy Bucket Hat",
    price: "$28.00",
    tag: "BESTSELLER",
    bg: "#FF3A8C",
    tagBg: "#F5FF2B",
    tagColor: "#000",
    img: "https://images.unsplash.com/photo-1627608015915-e55c3c6fafb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    emoji: "🌸",
  },
  {
    id: 2,
    name: "Rainbow Tote Bag",
    price: "$34.00",
    tag: "NEW DROP",
    bg: "#F5FF2B",
    tagBg: "#FF3A8C",
    tagColor: "#fff",
    img: "https://images.unsplash.com/photo-1660695828417-9cc2724bf656?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    emoji: "🌈",
  },
  {
    id: 3,
    name: "Enamel Pin Set",
    price: "$18.00",
    tag: "FAN FAV",
    bg: "#00C78C",
    tagBg: "#000",
    tagColor: "#F5FF2B",
    img: "https://images.unsplash.com/photo-1574097638739-725b61f511a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    emoji: "📌",
  },
  {
    id: 4,
    name: "Funky Sticker Pack",
    price: "$12.00",
    tag: "POPULAR",
    bg: "#FF7A45",
    tagBg: "#F5FF2B",
    tagColor: "#000",
    img: "https://images.unsplash.com/photo-1696351791451-d1706d02c462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    emoji: "✨",
  },
];

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array(5).fill(null).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill={i < count ? "#F5FF2B" : "#ddd"}>
          <path d="M6 0.5L7.24 4.28H11.09L7.92 6.61L9.16 10.39L6 8.07L2.84 10.39L4.08 6.61L0.91 4.28H4.76L6 0.5Z" stroke="#000" strokeWidth="0.8"/>
        </svg>
      ))}
    </div>
  );
}

export function ShopFaves() {
  return (
    <section style={{ backgroundColor: "#fff", padding: "60px 0" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section heading */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-4 mb-2">
            <div style={{ width: "40px", height: "3px", backgroundColor: "#000" }} />
            <span
              style={{
                fontFamily: "Anton, sans-serif",
                fontSize: "clamp(32px, 5vw, 52px)",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#000",
              }}
            >
              SHOP OUR FAVES
            </span>
            <div style={{ width: "40px", height: "3px", backgroundColor: "#000" }} />
          </div>
          <div
            style={{
              display: "inline-flex",
              gap: "6px",
              marginTop: "8px",
            }}
          >
            {["🌟","🌸","💫","🎉"].map((e, i) => (
              <span key={i} style={{ fontSize: "20px" }}>{e}</span>
            ))}
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                backgroundColor: product.bg,
                border: "3px solid #000",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "6px 6px 0 #000",
                cursor: "pointer",
                transition: "transform 0.15s, box-shadow 0.15s",
              }}
              onMouseOver={e => {
                (e.currentTarget as HTMLElement).style.transform = "translate(-3px, -3px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "9px 9px 0 #000";
              }}
              onMouseOut={e => {
                (e.currentTarget as HTMLElement).style.transform = "";
                (e.currentTarget as HTMLElement).style.boxShadow = "6px 6px 0 #000";
              }}
            >
              {/* Tag */}
              <div style={{ padding: "6px 10px", borderBottom: "2px solid #000", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span
                  style={{
                    fontFamily: "Anton, sans-serif",
                    fontSize: "11px",
                    letterSpacing: "1.5px",
                    backgroundColor: product.tagBg,
                    color: product.tagColor,
                    padding: "2px 8px",
                    borderRadius: "4px",
                    border: "1.5px solid #000",
                  }}
                >
                  {product.tag}
                </span>
                <span style={{ fontSize: "16px" }}>{product.emoji}</span>
              </div>

              {/* Image */}
              <div style={{ height: "180px", overflow: "hidden", backgroundColor: "rgba(0,0,0,0.05)" }}>
                <ImageWithFallback
                  src={product.img}
                  alt={product.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>

              {/* Info */}
              <div style={{ padding: "10px 12px", backgroundColor: "#fff", borderTop: "2px solid #000" }}>
                <StarRating />
                <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800, fontSize: "13px", marginTop: "4px", color: "#000" }}>
                  {product.name}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span style={{ fontFamily: "Anton, sans-serif", fontSize: "16px", color: "#000" }}>
                    {product.price}
                  </span>
                  <button
                    style={{
                      backgroundColor: "#000",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      padding: "4px 10px",
                      fontFamily: "Nunito, sans-serif",
                      fontWeight: 800,
                      fontSize: "11px",
                      cursor: "pointer",
                      letterSpacing: "0.5px",
                    }}
                  >
                    ADD +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="flex justify-center mt-10">
          <button
            style={{
              fontFamily: "Anton, sans-serif",
              letterSpacing: "2px",
              fontSize: "16px",
              backgroundColor: "#000",
              color: "#F5FF2B",
              border: "3px solid #000",
              borderRadius: "6px",
              padding: "14px 40px",
              cursor: "pointer",
              boxShadow: "5px 5px 0 #FF3A8C",
              textTransform: "uppercase",
            }}
          >
            VIEW ALL PRODUCTS →
          </button>
        </div>
      </div>
    </section>
  );
}
