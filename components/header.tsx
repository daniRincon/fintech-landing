"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { Logo } from "./logo"
import { styled } from "styled-components"

const NavContainer = styled.nav`
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`

const NavLink = styled.a`
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: var(--primary);
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <NavContainer className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-8 w-8" />
            <span className="font-bold text-xl hidden sm:inline-block">FinanceHub</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" passHref legacyBehavior>
            <NavLink className="text-sm font-medium transition-colors hover:text-primary">Inicio</NavLink>
          </Link>
          <Link href="/#productos" passHref legacyBehavior>
            <NavLink className="text-sm font-medium transition-colors hover:text-primary">Productos</NavLink>
          </Link>
          <Link href="/#nosotros" passHref legacyBehavior>
            <NavLink className="text-sm font-medium transition-colors hover:text-primary">Nosotros</NavLink>
          </Link>
          <Link href="/#contacto" passHref legacyBehavior>
            <NavLink className="text-sm font-medium transition-colors hover:text-primary">Contacto</NavLink>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button className="hidden md:flex">Iniciar sesión</Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden container py-4 pb-6 border-t">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/#productos"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Productos
            </Link>
            <Link
              href="/#nosotros"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              href="/#contacto"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
            <Button className="w-full mt-2">Iniciar sesión</Button>
          </div>
        </div>
      )}
    </NavContainer>
  )
}
