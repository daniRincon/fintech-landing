import { getProductById } from "@/lib/products"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductDetail from "@/components/product-detail"
import { notFound } from "next/navigation"
import type { Metadata, ResolvingMetadata } from "next"

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const product = getProductById(params.id)

  if (!product) {
    return {
      title: "Producto no encontrado | FinanceHub",
    }
  }

  return {
    title: `${product.name} | FinanceHub`,
    description: `Conoce más sobre ${product.name}, ${product.shortDescription}`,
  }
}

export default function ProductPage({ params }: Props) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <ProductDetail product={product} />
      <Footer />
    </main>
  )
}
