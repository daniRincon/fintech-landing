import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Página no encontrada</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Lo sentimos, no pudimos encontrar el producto o página que estás buscando.
        </p>
        <Link
          href="/"
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Volver al catálogo
        </Link>
      </div>
      <Footer />
    </main>
  )
}
