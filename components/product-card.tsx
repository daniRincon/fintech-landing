"use client"

import Link from "next/link"
import Image from "next/image"
import { styled } from "styled-components"
import { ArrowRight, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { type Product, RiskLevel } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

const StyledCard = styled(Card)`
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`

const ProductImage = styled.div`
  position: relative;
  height: 200px;
  width: 100%;
  background: linear-gradient(135deg, var(--primary-50, #f0f9ff) 0%, var(--primary-100, #e0f2fe) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  .dark & {
    background: linear-gradient(135deg, var(--primary-950, #0c4a6e) 0%, var(--primary-900, #075985) 100%);
  }
`

const FeaturedBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
`

const RiskIndicator = styled.div<{ $level: RiskLevel }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  
  .risk-dots {
    display: flex;
    gap: 2px;
  }
  
  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--muted);
  }
  
  ${({ $level }) => {
    if ($level === RiskLevel.VERY_LOW) {
      return `
        .dot:nth-child(1) { background-color: var(--primary); }
      `
    } else if ($level === RiskLevel.LOW) {
      return `
        .dot:nth-child(1), .dot:nth-child(2) { background-color: var(--primary); }
      `
    } else if ($level === RiskLevel.MEDIUM) {
      return `
        .dot:nth-child(1), .dot:nth-child(2), .dot:nth-child(3) { background-color: var(--primary); }
      `
    } else if ($level === RiskLevel.HIGH) {
      return `
        .dot:nth-child(1), .dot:nth-child(2), .dot:nth-child(3), .dot:nth-child(4) { background-color: var(--primary); }
      `
    } else if ($level === RiskLevel.VERY_HIGH) {
      return `
        .dot:nth-child(1), .dot:nth-child(2), .dot:nth-child(3), .dot:nth-child(4), .dot:nth-child(5) { background-color: var(--primary); }
      `
    }
}}
`

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <StyledCard>
      <ProductImage>
        {product.featured && (
          <FeaturedBadge>
            <Badge className="gap-1 bg-primary text-primary-foreground">
              <Star className="h-3 w-3 fill-current" />
              Destacado
            </Badge>
          </FeaturedBadge>
        )}
        <Image
          src={product.imageUrl || "/placeholder.svg"}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority={product.featured}
        />
      </ProductImage>
      <CardContent className="flex-1 p-6">
        <div className="space-y-1.5 mb-3">
          <Badge variant="outline" className="mb-2">
            {product.type}
          </Badge>
          <h3 className="font-semibold text-xl">{product.name}</h3>
          <p className="text-sm text-muted-foreground">{product.shortDescription}</p>
        </div>

        <div className="space-y-2 mt-4">
          {product.interestRate !== undefined && (
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Tasa de interés:</span>
              <span className="font-medium">{product.interestRate}%</span>
            </div>
          )}

          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Categoría:</span>
            <span className="font-medium">{product.category}</span>
          </div>

          {product.riskLevel && (
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Nivel de riesgo:</span>
              <RiskIndicator $level={product.riskLevel}>
                <span className="text-xs font-medium">{product.riskLevel}</span>
                <div className="risk-dots">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </RiskIndicator>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={`/product/${product.id}`} className="w-full">
          <Button className="w-full gap-2">
            Ver detalles
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </StyledCard>
  )
}
