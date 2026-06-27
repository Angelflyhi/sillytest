import { ImageWithFallback } from "./figma/ImageWithFallback";

const moreProducts = [
  {
    id: 1,
    name: "Checkerboard Patch",
    price: "$9.00",
    bg: "#000",
    textColor: "#F5FF2B",
    img: "https://images.unsplash.com/photo-1651177571506-6d38447d987b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300",
    tag: "SALE",
    tagBg: "#FF3A8C",
  },
  {
    id: 2,
    name: "Funky Embroidered Patch",
    price: "$11.00",
    bg: "#F5FF2B",
    textColor: "#000",
    img: "https://images.unsplash.com/photo-1680034976848-d9fe95466aba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300",
    tag: "NEW",
    tagBg: "#00C78C",
  },
  {
    id: 3,
    name: "Love Tote Bag",
    price: "$29.00",
    bg: "#FF3A8C",
    textColor: "#fff",
    img: "https://images.unsplash.com/photo-1711605536037-eb9c2b42235c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300",
    tag: "TRENDING",
    tagBg: "#F5FF2B",
  },
  {
    id: 4,
    name: "Sticker Bomb Pack",
    price: "$15.00",
    bg: "#00C78C",
    textColor: "#000",
    img: "https://images.unsplash.com/photo-1696351791451-d1706d02c462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300",
    tag: "POPULAR",
    tagBg: "#FF3A8C",
  },
  {
    id: 5,
    name: "Leather Tote Set",
    price: "$45.00",
    bg: "#FF7A45",
    textColor: "#fff",
    img: "https://images.unsplash.com/photo-1570993868197-c16e5e347fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300",
    tag: "LUXURY",
    tagBg: "#000",
  },
  {
    id: 6,
    name: "Street Pins Bundle",
    price: "$22.00",
    bg: "#7B5CF6",
    textColor: "#fff",
    img: "https://images.unsplash.com/photo-1574097638739-725b61f511a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300",
    tag: "LIMITED",
    tagBg: "#F5FF2B",
  },
];

export function MoreProducts() {
  return (
    <section
      style={{
        backgroundColor: "#f9f9f9",
        borderTop: "3px solid #000",
        padding: "60px 0",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="flex items-center gap-4 mb-10">
          <div
            style={{
              width: "8px",
              height: "48px",
              backgroundColor: "#FF3A8C",
              border: "2px solid #000",
              borderRadius: "4px",
              flexShrink: 0,
            }}
          />
          <h2
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#000",
            }}
          >
            MORE TO LOVE
          </h2>
          <div style={{ flex: 1, height: "3px", backgroundColor: "#000", borderRadius: "2px" }} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {moreProducts.map((product) => (
            <div
              key={product.id}
              style={{
                backgroundColor: product.bg,
                border: "3px solid #000",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "4px 4px 0 #000",
                cursor: "pointer",
                transition: "transform 0.15s, box-shadow 0.15s",
              }}
              onMouseOver={e => {
                (e.currentTarget as HTMLElement).style.transform = "translate(-2px, -2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "6px 6px 0 #000";
              }}
              onMouseOut={e => {
                (e.currentTarget as HTMLElement).style.transform = "";
                (e.currentTarget as HTMLElement).style.boxShadow = "4px 4px 0 #000";
              }}
            >
              <div style={{ height: "130px", overflow: "hidden" }}>
                <ImageWithFallback
                  src={product.img}
                  alt={product.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <div style={{ padding: "8px 10px" }}>
                <span
                  style={{
                    fontFamily: "Anton, sans-serif",
                    fontSize: "9px",
                    letterSpacing: "1px",
                    backgroundColor: product.tagBg,
                    color: product.tagBg === "#F5FF2B" ? "#000" : "#fff",
                    padding: "2px 6px",
                    borderRadius: "3px",
                    border: "1.5px solid #000",
                    display: "inline-block",
                    marginBottom: "4px",
                  }}
                >
                  {product.tag}
                </span>
                <p
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontWeight: 800,
                    fontSize: "11px",
                    color: product.textColor,
                    margin: "2px 0",
                    lineHeight: 1.3,
                  }}
                >
                  {product.name}
                </p>
                <p
                  style={{
                    fontFamily: "Anton, sans-serif",
                    fontSize: "14px",
                    color: product.textColor,
                    margin: 0,
                  }}
                >
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
