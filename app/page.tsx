import Header from "@/components/header"
import ProductCatalog from "@/components/product-catalog"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <ProductCatalog />
      <Footer />
    </main>
  )
}
