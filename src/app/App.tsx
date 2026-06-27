import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { PromoStrip } from "./components/PromoStrip";
import { ShopFaves } from "./components/ShopFaves";
import { MidPromo } from "./components/MidPromo";
import { Reviews } from "./components/Reviews";
import { MoreProducts } from "./components/MoreProducts";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div style={{ fontFamily: "Nunito, sans-serif", backgroundColor: "#fff", minHeight: "100vh" }}>
      <Header />
      <Hero />
      <PromoStrip />
      <ShopFaves />
      <MidPromo />
      <Reviews />
      <MoreProducts />
      <Newsletter />
      <Footer />
    </div>
  );
}
