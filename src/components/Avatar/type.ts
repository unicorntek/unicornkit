import { ReactNode } from "react"

export interface AvatarProps {
  children?: React.ReactNode
  icon?: string
  image?: string
  imageAlt?: string
  imageFallback?: string
  label?: string
  shape?: "square" | "circle"
  size?: "normal" | "large" | "xlarge"
  template?: ReactNode | Function
}
