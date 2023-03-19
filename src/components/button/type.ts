import { ReactNode } from "react"
export interface ButtonProps {
  ariaLabel?: string
  badge?: string
  children?: ReactNode
  disabled?: boolean
  label: string
  link?: boolean
  loadging?: boolean
  outlined?: boolean
  raised?: boolean
  rounded?: boolean
  severity?: "success" | "help" | "info" | "warning" | "danger" | "secondary"
  size?: "small" | "large"
  tooltip?: string
  visible?: boolean
}
