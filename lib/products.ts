export interface Product {
  id: string
  name: string
  type: ProductType
  category: ProductCategory
  interestRate?: number
  riskLevel?: RiskLevel
  shortDescription: string
  description: string
  benefits: string[]
  requirements: string[]
  fees: Fee[]
  imageUrl: string
  featured?: boolean
}

export enum ProductType {
  ACCOUNT = "Cuenta",
  CARD = "Tarjeta",
  LOAN = "Préstamo",
  INVESTMENT = "Inversión",
  INSURANCE = "Seguro",
}

export enum ProductCategory {
  PERSONAL = "Personal",
  BUSINESS = "Empresarial",
  PREMIUM = "Premium",
  STUDENT = "Estudiante",
}

export enum RiskLevel {
  VERY_LOW = "Muy bajo",
  LOW = "Bajo",
  MEDIUM = "Medio",
  HIGH = "Alto",
  VERY_HIGH = "Muy alto",
}

export interface Fee {
  name: string
  amount: number
  description: string
}

export interface PerformanceData {
  month: string
  value: number
}

// Mock data for products
const products: Product[] = [
  {
    id: "cuenta-digital",
    name: "Cuenta Digital",
    type: ProductType.ACCOUNT,
    category: ProductCategory.PERSONAL,
    interestRate: 0.5,
    shortDescription: "Cuenta sin comisiones con tarjeta de débito gratuita",
    description:
      "Nuestra Cuenta Digital está diseñada para el día a día, sin comisiones de mantenimiento y con una tarjeta de débito gratuita. Disfruta de transferencias ilimitadas, retiros en cajeros y una experiencia 100% digital.",
    benefits: [
      "Sin comisión de mantenimiento",
      "Tarjeta de débito sin costo",
      "Transferencias ilimitadas",
      "Retiros en cajeros sin costo",
      "App móvil intuitiva",
    ],
    requirements: ["Ser mayor de 18 años", "Documento de identidad vigente", "Comprobante de domicilio"],
    fees: [
      {
        name: "Mantenimiento mensual",
        amount: 0,
        description: "Sin costo de mantenimiento",
      },
      {
        name: "Transferencias",
        amount: 0,
        description: "Transferencias nacionales gratuitas",
      },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: "cuenta-ahorro-plus",
    name: "Cuenta Ahorro Plus",
    type: ProductType.ACCOUNT,
    category: ProductCategory.PERSONAL,
    interestRate: 2.5,
    shortDescription: "Maximiza tus ahorros con intereses competitivos",
    description:
      "La Cuenta Ahorro Plus te ofrece una tasa de interés competitiva para hacer crecer tu dinero. Ideal para quienes buscan ahorrar a mediano y largo plazo con total flexibilidad para disponer de sus fondos.",
    benefits: [
      "Tasa de interés del 2.5% anual",
      "Sin monto mínimo de apertura",
      "Acceso a tu dinero en cualquier momento",
      "Notificaciones de movimientos",
      "Herramientas de ahorro automático",
    ],
    requirements: ["Ser mayor de 18 años", "Documento de identidad vigente", "Comprobante de domicilio"],
    fees: [
      {
        name: "Mantenimiento mensual",
        amount: 0,
        description: "Sin costo de mantenimiento",
      },
      {
        name: "Retiros",
        amount: 0,
        description: "Hasta 4 retiros gratuitos al mes",
      },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "cuenta-empresarial",
    name: "Cuenta Empresarial",
    type: ProductType.ACCOUNT,
    category: ProductCategory.BUSINESS,
    interestRate: 1.0,
    shortDescription: "Solución completa para la gestión financiera de tu negocio",
    description:
      "Nuestra Cuenta Empresarial está diseñada específicamente para satisfacer las necesidades de pequeñas y medianas empresas, ofreciendo herramientas de gestión financiera, múltiples usuarios y beneficios exclusivos.",
    benefits: [
      "Múltiples usuarios con diferentes niveles de acceso",
      "Integración con software contable",
      "Transferencias masivas",
      "Conciliación bancaria automatizada",
      "Soporte prioritario",
    ],
    requirements: [
      "Documentación legal de la empresa",
      "Identificación del representante legal",
      "Comprobante de domicilio comercial",
    ],
    fees: [
      {
        name: "Mantenimiento mensual",
        amount: 15,
        description: "Mantenimiento mensual de la cuenta",
      },
      {
        name: "Transferencias internacionales",
        amount: 25,
        description: "Por transferencia internacional realizada",
      },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "tarjeta-credito-rewards",
    name: "Tarjeta Crédito Rewards",
    type: ProductType.CARD,
    category: ProductCategory.PERSONAL,
    interestRate: 18.9,
    shortDescription: "Acumula puntos en cada compra y canjéalos por lo que quieras",
    description:
      "Nuestra Tarjeta de Crédito Rewards te permite acumular puntos en cada compra que realices. Estos puntos pueden ser canjeados por viajes, productos, servicios o incluso efectivo. Además, disfruta de beneficios exclusivos y promociones especiales.",
    benefits: [
      "1 punto por cada $10 de compra",
      "Puntos que no caducan",
      "Seguro de compra protegida",
      "Descuentos en establecimientos asociados",
      "Sin anualidad el primer año",
    ],
    requirements: ["Ser mayor de 21 años", "Ingresos mínimos de $15,000 mensuales", "Buen historial crediticio"],
    fees: [
      {
        name: "Anualidad",
        amount: 120,
        description: "Cobro anual por mantenimiento de la tarjeta",
      },
      {
        name: "Tasa de interés",
        amount: 18.9,
        description: "Tasa de interés anual por financiamiento",
      },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: "tarjeta-credito-premium",
    name: "Tarjeta Crédito Premium",
    type: ProductType.CARD,
    category: ProductCategory.PREMIUM,
    interestRate: 16.5,
    shortDescription: "Experiencias exclusivas y beneficios de clase mundial",
    description:
      "La Tarjeta de Crédito Premium está diseñada para clientes que buscan experiencias exclusivas y beneficios de clase mundial. Accede a salas VIP en aeropuertos, concierge personal, seguros de viaje premium y mucho más.",
    benefits: [
      "Acceso a más de 1,300 salas VIP en aeropuertos",
      "Concierge personal 24/7",
      "Seguro de viaje con cobertura hasta $1,000,000",
      "Cashback del 2% en todas tus compras",
      "Experiencias exclusivas en gastronomía y entretenimiento",
    ],
    requirements: ["Ser mayor de 25 años", "Ingresos mínimos de $50,000 mensuales", "Excelente historial crediticio"],
    fees: [
      {
        name: "Anualidad",
        amount: 450,
        description: "Cobro anual por mantenimiento de la tarjeta",
      },
      {
        name: "Tasa de interés",
        amount: 16.5,
        description: "Tasa de interés anual por financiamiento",
      },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "prestamo-personal",
    name: "Préstamo Personal",
    type: ProductType.LOAN,
    category: ProductCategory.PERSONAL,
    interestRate: 12.9,
    shortDescription: "Financiamiento flexible para tus proyectos personales",
    description:
      "Nuestro Préstamo Personal te ofrece la flexibilidad que necesitas para financiar tus proyectos, desde renovaciones en tu hogar hasta viajes o estudios. Con plazos de hasta 60 meses y tasas competitivas.",
    benefits: [
      "Aprobación en 24 horas",
      "Sin penalización por pago anticipado",
      "Montos desde $5,000 hasta $100,000",
      "Plazos flexibles de 12 a 60 meses",
      "Tasa fija durante toda la vida del préstamo",
    ],
    requirements: [
      "Ser mayor de 21 años",
      "Ingresos mínimos de $12,000 mensuales",
      "Buen historial crediticio",
      "Antigüedad laboral mínima de 1 año",
    ],
    fees: [
      {
        name: "Comisión por apertura",
        amount: 2,
        description: "Porcentaje sobre el monto del préstamo",
      },
      {
        name: "Seguro de vida",
        amount: 0.5,
        description: "Porcentaje anual sobre el saldo insoluto",
      },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1589666564459-93cdd3ab856a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "prestamo-hipotecario",
    name: "Préstamo Hipotecario",
    type: ProductType.LOAN,
    category: ProductCategory.PERSONAL,
    interestRate: 8.5,
    shortDescription: "Haz realidad el sueño de tu casa propia",
    description:
      "Nuestro Préstamo Hipotecario te ayuda a hacer realidad el sueño de tener tu casa propia con tasas competitivas y plazos de hasta 30 años. Financiamos hasta el 80% del valor de la propiedad.",
    benefits: [
      "Tasas desde 8.5% anual",
      "Plazos de hasta 30 años",
      "Financiamiento de hasta el 80% del valor de la propiedad",
      "Posibilidad de realizar pagos anticipados sin penalización",
      "Asesoría personalizada durante todo el proceso",
    ],
    requirements: [
      "Ser mayor de 25 años",
      "Ingresos mínimos de $25,000 mensuales",
      "Buen historial crediticio",
      "Antigüedad laboral mínima de 2 años",
    ],
    fees: [
      {
        name: "Comisión por apertura",
        amount: 1,
        description: "Porcentaje sobre el monto del préstamo",
      },
      {
        name: "Avalúo",
        amount: 3500,
        description: "Costo fijo por avalúo de la propiedad",
      },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: "fondo-inversion-conservador",
    name: "Fondo de Inversión Conservador",
    type: ProductType.INVESTMENT,
    category: ProductCategory.PERSONAL,
    interestRate: 5.2,
    riskLevel: RiskLevel.LOW,
    shortDescription: "Inversión de bajo riesgo con rendimientos estables",
    description:
      "El Fondo de Inversión Conservador está diseñado para inversionistas que buscan preservar su capital con un riesgo mínimo. Invierte principalmente en instrumentos de deuda gubernamental y corporativa de alta calidad.",
    benefits: [
      "Rendimiento histórico anual promedio de 5.2%",
      "Riesgo bajo",
      "Liquidez en 48 horas",
      "Inversión mínima de $1,000",
      "Sin comisión por retiro",
    ],
    requirements: ["Ser mayor de 18 años", "Documento de identidad vigente", "Comprobante de domicilio"],
    fees: [
      {
        name: "Comisión por administración",
        amount: 1.2,
        description: "Porcentaje anual sobre el monto invertido",
      },
      {
        name: "Comisión por rendimiento",
        amount: 0,
        description: "Sin comisión por rendimiento",
      },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "fondo-inversion-crecimiento",
    name: "Fondo de Inversión Crecimiento",
    type: ProductType.INVESTMENT,
    category: ProductCategory.PERSONAL,
    interestRate: 12.8,
    riskLevel: RiskLevel.HIGH,
    shortDescription: "Maximiza tu rendimiento con una estrategia de crecimiento",
    description:
      "El Fondo de Inversión Crecimiento está diseñado para inversionistas que buscan maximizar su rendimiento a largo plazo. Invierte principalmente en acciones de empresas con alto potencial de crecimiento en mercados nacionales e internacionales.",
    benefits: [
      "Rendimiento histórico anual promedio de 12.8%",
      "Diversificación en mercados globales",
      "Gestión activa por expertos en inversiones",
      "Inversión mínima de $10,000",
      "Reportes trimestrales detallados",
    ],
    requirements: [
      "Ser mayor de 18 años",
      "Documento de identidad vigente",
      "Comprobante de domicilio",
      "Perfil de riesgo compatible",
    ],
    fees: [
      {
        name: "Comisión por administración",
        amount: 2.5,
        description: "Porcentaje anual sobre el monto invertido",
      },
      {
        name: "Comisión por rendimiento",
        amount: 10,
        description: "Porcentaje sobre rendimientos que superen el benchmark",
      },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "seguro-vida",
    name: "Seguro de Vida",
    type: ProductType.INSURANCE,
    category: ProductCategory.PERSONAL,
    shortDescription: "Protección financiera para ti y tu familia",
    description:
      "Nuestro Seguro de Vida ofrece protección financiera para ti y tu familia en caso de fallecimiento. Además, incluye coberturas adicionales por invalidez, enfermedades graves y más, adaptándose a tus necesidades específicas.",
    benefits: [
      "Cobertura por fallecimiento hasta $2,000,000",
      "Indemnización por invalidez total y permanente",
      "Cobertura por enfermedades graves",
      "Asistencia funeraria",
      "Anticipo de suma asegurada por enfermedad terminal",
    ],
    requirements: [
      "Ser mayor de 18 años y menor de 65 años",
      "Documento de identidad vigente",
      "Cuestionario médico",
      "Examen médico (para coberturas superiores a $1,000,000)",
    ],
    fees: [
      {
        name: "Prima anual",
        amount: 0,
        description: "Varía según edad, género y suma asegurada",
      },
      {
        name: "Recargo por pago fraccionado",
        amount: 5,
        description: "Porcentaje adicional por pago mensual o trimestral",
      },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "seguro-auto",
    name: "Seguro de Auto",
    type: ProductType.INSURANCE,
    category: ProductCategory.PERSONAL,
    shortDescription: "Protección completa para tu vehículo y tranquilidad al volante",
    description:
      "Nuestro Seguro de Auto te ofrece protección completa para tu vehículo contra daños materiales, robo total, responsabilidad civil y gastos médicos. Con asistencia vial 24/7 y proceso de reclamación simplificado.",
    benefits: [
      "Cobertura contra daños materiales",
      "Protección contra robo total",
      "Responsabilidad civil hasta $3,000,000",
      "Gastos médicos para ocupantes",
      "Asistencia vial 24/7",
    ],
    requirements: [
      "Ser mayor de 18 años",
      "Licencia de conducir vigente",
      "Tarjeta de circulación del vehículo",
      "Factura o carta factura del vehículo",
    ],
    fees: [
      {
        name: "Prima anual",
        amount: 0,
        description: "Varía según características del vehículo y perfil del conductor",
      },
      {
        name: "Deducible por daños materiales",
        amount: 5,
        description: "Porcentaje sobre el valor del vehículo",
      },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "cuenta-estudiante",
    name: "Cuenta Estudiante",
    type: ProductType.ACCOUNT,
    category: ProductCategory.STUDENT,
    interestRate: 1.0,
    shortDescription: "Diseñada para estudiantes con beneficios exclusivos",
    description:
      "Nuestra Cuenta Estudiante está diseñada específicamente para jóvenes en formación académica. Sin comisiones, con tarjeta de débito gratuita y beneficios exclusivos para estudiantes como descuentos en librerías, transporte y entretenimiento.",
    benefits: [
      "Sin comisión de mantenimiento",
      "Tarjeta de débito sin costo",
      "Descuentos en librerías y material educativo",
      "Promociones en plataformas de streaming",
      "Programa de cashback en transporte público",
    ],
    requirements: ["Tener entre 18 y 25 años", "Documento de identidad vigente", "Comprobante de estudios vigente"],
    fees: [
      {
        name: "Mantenimiento mensual",
        amount: 0,
        description: "Sin costo de mantenimiento",
      },
      {
        name: "Retiros en cajeros",
        amount: 0,
        description: "Hasta 8 retiros gratuitos al mes",
      },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
]

// Function to get all products
export function getProducts(): Product[] {
  return products
}

// Function to get a product by ID
export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

// Function to get products by category
export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((product) => product.category === category)
}

// Function to get products by type
export function getProductsByType(type: ProductType): Product[] {
  return products.filter((product) => product.type === type)
}

// Function to get featured products
export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured)
}

// Function to get performance data for investment products
export function getPerformanceData(productId: string): PerformanceData[] {
  // This would typically come from an API or database
  // For this example, we'll generate some mock data
  const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]

  const product = getProductById(productId)

  if (!product || product.type !== ProductType.INVESTMENT) {
    return []
  }

  // Generate random performance data based on risk level
  const baseValue = 100
  let volatility = 5 // Default volatility

  if (product.riskLevel === RiskLevel.VERY_LOW) volatility = 2
  else if (product.riskLevel === RiskLevel.LOW) volatility = 5
  else if (product.riskLevel === RiskLevel.MEDIUM) volatility = 10
  else if (product.riskLevel === RiskLevel.HIGH) volatility = 15
  else if (product.riskLevel === RiskLevel.VERY_HIGH) volatility = 20

  let currentValue = baseValue
  const performanceData: PerformanceData[] = []

  for (let i = 0; i < 12; i++) {
    // Random change within volatility range
    const change = (Math.random() * volatility * 2 - volatility) / 100
    currentValue = currentValue * (1 + change)

    performanceData.push({
      month: months[i],
      value: Number.parseFloat(currentValue.toFixed(2)),
    })
  }

  return performanceData
}
