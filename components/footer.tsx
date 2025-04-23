"use client"

import Link from "next/link"
import { styled } from "styled-components"
import { Logo } from "./logo"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

const FooterContainer = styled.footer`
  border-top: 1px solid var(--border);
`

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: var(--muted);
  color: var(--muted-foreground);
  transition: all 0.2s ease;
  
  &:hover {
    background-color: var(--primary);
    color: var(--primary-foreground);
    transform: translateY(-2px);
  }
`

export default function Footer() {
  return (
    <FooterContainer className="bg-background">
      <div className="container px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="flex flex-col gap-4 md:col-span-2">
            <Link href="/" className="flex items-center gap-2" >
              <Logo className="h-8 w-8" />
              <span className="font-bold text-xl">FinanceHub</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Transformando el futuro financiero con soluciones digitales seguras, transparentes y accesibles para
              todos.
            </p>
            <div className="flex gap-4 mt-2">
              <SocialIcon href="#" aria-label="Facebook">
                <Facebook size={18} />
              </SocialIcon>
              <SocialIcon href="#" aria-label="Twitter">
                <Twitter size={18} />
              </SocialIcon>
              <SocialIcon href="#" aria-label="Instagram">
                <Instagram size={18} />
              </SocialIcon>
              <SocialIcon href="#" aria-label="LinkedIn">
                <Linkedin size={18} />
              </SocialIcon>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Productos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Cuentas
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Tarjetas
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Inversiones
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Préstamos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Seguros
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Compañía</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Carreras
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Prensa
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Soporte</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Centro de ayuda
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Términos de servicio
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} FinanceHub. Todos los derechos reservados.</p>
        </div>
      </div>
    </FooterContainer>
  );
}
