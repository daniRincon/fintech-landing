"use client"

import { useState } from "react"
import { styled } from "styled-components"
import { getProducts, ProductType, ProductCategory } from "@/lib/products"
import ProductCard from "./product-card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export default function ProductCatalog() {
  const allProducts = getProducts()
  const [selectedType, setSelectedType] = useState<string>("all")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const filteredProducts = allProducts.filter((product) => {
    const typeMatch = selectedType === "all" || product.type === selectedType
    const categoryMatch = selectedCategory === "all" || product.category === selectedCategory
    return typeMatch && categoryMatch
  })

  const handleTypeChange = (value: string) => {
    setSelectedType(value)
  }

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value)
  }

  return (
    <section className="w-full py-12 md:py-24" id="productos">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Nuestros Productos Financieros
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Descubre soluciones financieras diseñadas para cada etapa de tu vida
            </p>
          </div>
        </div>

        <FilterContainer>
          <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={handleTypeChange}>
            <TabsList className="w-full md:w-auto grid grid-cols-3 md:grid-cols-6">
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value={ProductType.ACCOUNT}>Cuentas</TabsTrigger>
              <TabsTrigger value={ProductType.CARD}>Tarjetas</TabsTrigger>
              <TabsTrigger value={ProductType.LOAN}>Préstamos</TabsTrigger>
              <TabsTrigger value={ProductType.INVESTMENT}>Inversiones</TabsTrigger>
              <TabsTrigger value={ProductType.INSURANCE}>Seguros</TabsTrigger>
            </TabsList>
          </Tabs>

          <Select onValueChange={handleCategoryChange}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Categoría" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas las categorías</SelectItem>
              <SelectItem value={ProductCategory.PERSONAL}>Personal</SelectItem>
              <SelectItem value={ProductCategory.BUSINESS}>Empresarial</SelectItem>
              <SelectItem value={ProductCategory.PREMIUM}>Premium</SelectItem>
              <SelectItem value={ProductCategory.STUDENT}>Estudiante</SelectItem>
            </SelectContent>
          </Select>
        </FilterContainer>

        {filteredProducts.length > 0 ? (
          <ProductGrid>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductGrid>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No se encontraron productos con los filtros seleccionados.</p>
          </div>
        )}
      </div>
    </section>
  )
}
