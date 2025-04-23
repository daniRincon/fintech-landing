"use client"

import Link from "next/link"
import Image from "next/image"
import { styled } from "styled-components"
import { ArrowLeft, Check, Info } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { type Product, ProductType, RiskLevel, getPerformanceData } from "@/lib/products"
import PerformanceChart from "./performance-chart"

interface ProductDetailProps {
  product: Product
}

const DetailContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  
  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`

const ProductHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`

const ProductImage = styled.div`
  position: relative;
  height: 300px;
  width: 100%;
  max-width: 500px;
  background: linear-gradient(135deg, var(--primary-50, #f0f9ff) 0%, var(--primary-100, #e0f2fe) 100%);
  border-radius: 1rem;
  overflow: hidden;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    margin: 0;
    height: 350px;
  }
  
  .dark & {
    background: linear-gradient(135deg, var(--primary-950, #0c4a6e) 0%, var(--primary-900, #075985) 100%);
  }
`

const ProductInfo = styled.div`
  flex: 1;
  
  @media (min-width: 768px) {
    padding-left: 2rem;
  }
`

const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
  }
`

const BenefitItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
  
  .icon {
    color: var(--primary);
    margin-top: 0.25rem;
  }
`

const RiskIndicator = styled.div<{ $level: RiskLevel }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  .risk-dots {
    display: flex;
    gap: 3px;
  }
  
  .dot {
    width: 10px;
    height: 10px;
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

const FeesTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid var(--border);
  }
  
  th {
    font-weight: 500;
    color: var(--muted-foreground);
  }
`

export default function ProductDetail({ product }: ProductDetailProps) {
  const performanceData = product.type === ProductType.INVESTMENT ? getPerformanceData(product.id) : []

  return (
    <DetailContainer>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:text-primary transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver al catálogo
      </Link>

      <ProductHeader>
        <ProductImage>
          <Image
            src={product.imageUrl || "/placeholder.svg"}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            className="object-cover"
            priority
          />
        </ProductImage>

        <ProductInfo>
          <div className="flex flex-wrap gap-2 mb-2">
            <Badge variant="outline">{product.type}</Badge>
            <Badge variant="outline">{product.category}</Badge>
            {product.featured && <Badge className="bg-primary text-primary-foreground">Destacado</Badge>}
          </div>

          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-muted-foreground mb-4">{product.shortDescription}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {product.interestRate !== undefined && (
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Tasa de interés</div>
                <div className="text-2xl font-bold">{product.interestRate}%</div>
              </div>
            )}

            {product.riskLevel && (
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Nivel de riesgo</div>
                <RiskIndicator $level={product.riskLevel} className="mt-2">
                  <span className="font-medium">{product.riskLevel}</span>
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

          <Button size="lg" className="w-full md:w-auto">
            Solicitar ahora
          </Button>
        </ProductInfo>
      </ProductHeader>

      <Separator className="my-8" />

      <DetailGrid>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Descripción</h2>
          <p className="text-muted-foreground mb-8">{product.description}</p>

          <h2 className="text-2xl font-semibold mb-4">Beneficios</h2>
          <ul className="mb-8">
            {product.benefits.map((benefit, index) => (
              <BenefitItem key={index}>
                <Check className="h-5 w-5 icon" />
                <span>{benefit}</span>
              </BenefitItem>
            ))}
          </ul>

          {product.type === ProductType.INVESTMENT && performanceData.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Rendimiento histórico</h2>
              <div className="bg-muted/30 p-4 rounded-lg">
                <PerformanceChart data={performanceData} />
              </div>
            </div>
          )}

          <Accordion type="single" collapsible className="mb-8">
            <AccordionItem value="requirements">
              <AccordionTrigger>
                <h2 className="text-xl font-semibold">Requisitos</h2>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 mt-2">
                  {product.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="fees">
              <AccordionTrigger>
                <h2 className="text-xl font-semibold">Comisiones y costos</h2>
              </AccordionTrigger>
              <AccordionContent>
                <FeesTable>
                  <thead>
                    <tr>
                      <th>Concepto</th>
                      <th>Monto</th>
                      <th>Descripción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.fees.map((fee, index) => (
                      <tr key={index}>
                        <td>{fee.name}</td>
                        <td>
                          {fee.amount === 0 && fee.name !== "Prima anual"
                            ? "Gratis"
                            : typeof fee.amount === "number" && fee.amount % 1 === 0 && fee.amount > 100
                              ? `${fee.amount.toLocaleString()}`
                              : `${fee.amount}%`}
                        </td>
                        <td className="text-muted-foreground text-sm">
                          <div className="flex items-center gap-1">
                            {fee.description}
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="max-w-xs">{fee.description}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </FeesTable>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div>
          <div className="bg-muted/30 p-6 rounded-lg sticky top-24">
            <h3 className="font-semibold text-lg mb-4">¿Necesitas ayuda?</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Nuestros asesores financieros están disponibles para resolver todas tus dudas y ayudarte a tomar la mejor
              decisión.
            </p>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Llamar a un asesor
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-message-square"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Chat en vivo
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-calendar"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
                Agendar cita
              </Button>
            </div>

            <Separator className="my-6" />

            <h3 className="font-semibold text-lg mb-4">Documentos importantes</h3>
            <div className="space-y-3">
              <Button variant="link" className="w-full justify-start p-0 h-auto text-primary">
                Términos y condiciones
              </Button>
              <Button variant="link" className="w-full justify-start p-0 h-auto text-primary">
                Contrato de adhesión
              </Button>
              <Button variant="link" className="w-full justify-start p-0 h-auto text-primary">
                Aviso de privacidad
              </Button>
            </div>
          </div>
        </div>
      </DetailGrid>
    </DetailContainer>
  )
}
