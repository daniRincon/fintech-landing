"use client"

import { useEffect, useRef } from "react"
import { styled } from "styled-components"
import type { PerformanceData } from "@/lib/products"

interface PerformanceChartProps {
  data: PerformanceData[]
}

const ChartContainer = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
`

export default function PerformanceChart({ data }: PerformanceChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current || data.length === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // Set dimensions for drawing
    const width = rect.width
    const height = rect.height
    const padding = 40

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Find min and max values
    const values = data.map((item) => item.value)
    const minValue = Math.min(...values) * 0.95
    const maxValue = Math.max(...values) * 1.05

    // Draw axes
    ctx.beginPath()
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue("--border")
    ctx.lineWidth = 1

    // Y-axis
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, height - padding)

    // X-axis
    ctx.moveTo(padding, height - padding)
    ctx.lineTo(width - padding, height - padding)
    ctx.stroke()

    // Draw grid lines
    const gridLines = 5
    ctx.beginPath()
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue("--border")
    ctx.lineWidth = 0.5
    ctx.setLineDash([5, 5])

    for (let i = 1; i <= gridLines; i++) {
      const y = padding + ((height - 2 * padding) / gridLines) * i
      ctx.moveTo(padding, height - y)
      ctx.lineTo(width - padding, height - y)

      // Add y-axis labels
      const value = minValue + ((maxValue - minValue) / gridLines) * i
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--muted-foreground")
      ctx.font = "10px sans-serif"
      ctx.textAlign = "right"
      ctx.fillText(value.toFixed(2), padding - 5, height - y + 3)
    }
    ctx.stroke()
    ctx.setLineDash([])

    // Draw x-axis labels
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--muted-foreground")
    ctx.font = "10px sans-serif"
    ctx.textAlign = "center"

    const xStep = (width - 2 * padding) / (data.length - 1)
    data.forEach((item, i) => {
      const x = padding + i * xStep
      ctx.fillText(item.month, x, height - padding + 15)
    })

    // Draw line
    ctx.beginPath()
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue("--primary")
    ctx.lineWidth = 2
    ctx.lineJoin = "round"

    data.forEach((item, i) => {
      const x = padding + i * xStep
      const y = height - padding - ((item.value - minValue) / (maxValue - minValue)) * (height - 2 * padding)

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })
    ctx.stroke()

    // Draw area under the line
    ctx.lineTo(padding + (data.length - 1) * xStep, height - padding)
    ctx.lineTo(padding, height - padding)
    ctx.closePath()

    const gradient = ctx.createLinearGradient(0, 0, 0, height)
    gradient.addColorStop(0, getComputedStyle(document.documentElement).getPropertyValue("--primary") + "33")
    gradient.addColorStop(1, getComputedStyle(document.documentElement).getPropertyValue("--primary") + "00")
    ctx.fillStyle = gradient
    ctx.fill()

    // Draw points
    data.forEach((item, i) => {
      const x = padding + i * xStep
      const y = height - padding - ((item.value - minValue) / (maxValue - minValue)) * (height - 2 * padding)

      ctx.beginPath()
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--background")
      ctx.arc(x, y, 4, 0, Math.PI * 2)
      ctx.fill()

      ctx.beginPath()
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--primary")
      ctx.arc(x, y, 3, 0, Math.PI * 2)
      ctx.fill()
    })
  }, [data])

  return (
    <ChartContainer>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </ChartContainer>
  )
}
