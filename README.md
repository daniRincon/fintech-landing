# Landing Financiera - Catálogo de Productos Digitales

Este proyecto es una landing page para una fintech o banco digital, que muestra una lista de productos financieros simulados con detalles clave, filtros relevantes y un diseño moderno, claro y confiable.

## Características

- **Home Page**: Encabezado con branding ficticio, grid de productos financieros mockeados, filtros por categoría y tipo, y CTAs para ver detalles de cada producto.
- **Página de Detalle**: Muestra toda la información relevante del producto financiero, con estructura clara, visualización de atributos clave y beneficios, y gráficos para productos de inversión.
- **Diseño y experiencia**: Mobile First, diseño profesional, confiable y accesible, con buen uso de TailwindCSS y Styled Components.

## Tecnologías utilizadas

- **Next.js 14** con App Router
- **TypeScript** en toda la base de código
- **TailwindCSS** para layout base
- **Styled Components** para diseño de componentes reutilizables
- **Shadcn/UI** para componentes base

## Instalación y ejecución

1. Clona el repositorio:
\`\`\`bash
git clone https://github.com/tu-usuario/fintech-landing.git
cd fintech-landing
\`\`\`

2. Instala las dependencias:
\`\`\`bash
npm install
# o
yarn install
# o
pnpm install
\`\`\`

3. Ejecuta el servidor de desarrollo:
\`\`\`bash
npm run dev
# o
yarn dev
# o
pnpm dev
\`\`\`

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Estructura del proyecto

\`\`\`
fintech-landing/
├── app/                    # Directorio principal de la aplicación Next.js
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página principal (Home)
│   ├── product/[id]/       # Página de detalle de producto
│   └── globals.css         # Estilos globales
├── components/             # Componentes reutilizables
│   ├── header.tsx          # Encabezado de la aplicación
│   ├── footer.tsx          # Pie de página
│   ├── product-catalog.tsx # Catálogo de productos
│   ├── product-card.tsx    # Tarjeta de producto individual
│   ├── product-detail.tsx  # Detalle de producto
│   └── ...                 # Otros componentes
├── lib/                    # Utilidades y funciones
│   └── products.ts         # Datos y funciones para productos
├── public/                 # Archivos estáticos
└── ...                     # Archivos de configuración
\`\`\`

## Decisiones técnicas

### Preguntas complementarias

#### 1. ¿Qué criterios seguiste para diseñar la UI de productos financieros?

Para diseñar la UI de productos financieros, seguí estos criterios:

- **Confiabilidad y profesionalismo**: Utilicé una paleta de colores azul que transmite confianza y estabilidad, esencial para servicios financieros.
- **Claridad en la información**: Presenté la información de manera jerárquica, destacando primero los datos más importantes (nombre, tipo, tasa de interés) y dejando los detalles para niveles más profundos.
- **Consistencia visual**: Mantuve un sistema de diseño coherente en toda la aplicación para facilitar la navegación y comprensión.
- **Accesibilidad**: Implementé un buen contraste de colores, tamaños de texto adecuados y etiquetas aria para mejorar la accesibilidad.
- **Visualización de datos**: Para productos de inversión, incluí gráficos para representar el rendimiento histórico, facilitando la comprensión de datos complejos.
- **Indicadores visuales de riesgo**: Creé un sistema visual de puntos para representar los niveles de riesgo, haciendo la información más digerible.

#### 2. ¿Cómo decidiste cuándo usar Tailwind y cuándo Styled Components?

La decisión de cuándo usar cada tecnología se basó en sus fortalezas:

- **Tailwind CSS**: Lo utilicé para:
  - Layout general y estructura de la página
  - Espaciado, márgenes y padding
  - Tipografía básica y colores del sistema
  - Responsive design (breakpoints)
  - Utilidades rápidas como flex, grid, etc.

- **Styled Components**: Lo utilicé para:
  - Componentes con lógica visual compleja (como el indicador de riesgo)
  - Elementos con animaciones y transiciones personalizadas
  - Componentes que necesitan acceder a props para cambiar su estilo
  - Estilos que dependen del tema (claro/oscuro)
  - Elementos con pseudo-clases y pseudo-elementos complejos

Esta combinación permitió aprovechar la rapidez de desarrollo de Tailwind para la estructura general, mientras que Styled Components aportó la flexibilidad necesaria para componentes más complejos y reutilizables.

#### 3. ¿Qué harías para escalar este proyecto en una aplicación real de banca digital?

Para escalar este proyecto a una aplicación real de banca digital:

- **Arquitectura**: Implementaría una arquitectura modular basada en dominios o características para facilitar el mantenimiento.
- **Estado global**: Añadiría gestión de estado con Redux Toolkit o Zustand para manejar el estado de la aplicación.
- **Autenticación**: Implementaría un sistema robusto de autenticación y autorización con NextAuth.js o Auth0.
- **API**: Desarrollaría una API RESTful o GraphQL para comunicación con el backend.
- **Internacionalización**: Añadiría soporte para múltiples idiomas con next-intl o react-i18next.
- **Testing**: Implementaría tests unitarios, de integración y e2e con Jest, React Testing Library y Cypress.
- **CI/CD**: Configuraría pipelines de integración y despliegue continuo.
- **Monitoreo**: Integraría herramientas de monitoreo y análisis de errores como Sentry.
- **Seguridad**: Implementaría medidas de seguridad como CSP, CSRF protection, rate limiting, etc.
- **Accesibilidad**: Realizaría auditorías de accesibilidad y mejoraría la conformidad con WCAG.

#### 4. ¿Qué herramientas usarías para mejorar el rendimiento y monitoreo en producción?

Para mejorar el rendimiento y monitoreo en producción:

- **Análisis de rendimiento**:
  - Lighthouse para auditorías de rendimiento
  - Web Vitals para métricas de experiencia de usuario
  - Next.js Analytics para monitoreo de rendimiento
  - Chrome DevTools Performance para análisis detallado

- **Monitoreo en producción**:
  - Vercel Analytics para monitoreo de páginas y rutas
  - Sentry para seguimiento de errores en tiempo real
  - LogRocket para reproducción de sesiones de usuario
  - DataDog o New Relic para monitoreo de aplicaciones
  - Grafana + Prometheus para dashboards personalizados

- **Optimización**:
  - Implementaría lazy loading para componentes y rutas
  - Optimizaría imágenes con next/image
  - Utilizaría estrategias de caching efectivas
  - Implementaría Server Components para reducir el JavaScript del cliente
  - Utilizaría React Suspense y streaming SSR para mejorar la percepción de velocidad

Estas herramientas y técnicas permitirían identificar cuellos de botella, monitorear el rendimiento en tiempo real y mejorar continuamente la experiencia del usuario.

## Licencia

Este proyecto está bajo la Licencia MIT.