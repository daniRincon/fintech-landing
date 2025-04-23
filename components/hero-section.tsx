"use client"

import { styled } from "styled-components"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const HeroContainer = styled.section`
  background: linear-gradient(135deg, var(--primary-50, #f0f9ff) 0%, var(--primary-100, #e0f2fe) 100%);
  
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(135deg, var(--primary-950, #0c4a6e) 0%, var(--primary-900, #075985) 100%);
  }
  
  .dark & {
    background: linear-gradient(135deg, var(--primary-950, #0c4a6e) 0%, var(--primary-900, #075985) 100%);
  }
`

const AnimatedGradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: radial-gradient(circle at 50% 50%, var(--primary-300, #7dd3fc) 0%, transparent 50%);
  opacity: 0.3;
  filter: blur(60px);
  z-index: 0;
  animation: pulse 8s ease-in-out infinite alternate;
  
  @keyframes pulse {
    0% {
      opacity: 0.2;
      transform: scale(0.8);
    }
    100% {
      opacity: 0.4;
      transform: scale(1.2);
    }
  }
  
  .dark & {
    background: radial-gradient(circle at 50% 50%, var(--primary-600, #0284c7) 0%, transparent 50%);
  }
`

export default function HeroSection() {
  return (
    <HeroContainer className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      <AnimatedGradient />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Soluciones financieras para el <span className="text-primary">futuro digital</span>
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Descubre nuestros productos financieros diseñados para ayudarte a alcanzar tus metas con seguridad,
            transparencia y tecnología de vanguardia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button size="lg" className="gap-2">
              Explorar productos
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Conocer más
            </Button>
          </div>
        </div>
      </div>
    </HeroContainer>
  )
}
