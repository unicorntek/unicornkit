import React from "react"
import { ButtonProps } from "./type"
import { ButtonStyle } from "./style"
import ReactDOM from "react-dom"

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const defaultAriaLabel = props.ariaLabel
    ? props.label + (props.badge ? "" + props.badge : "")
    : ""

  const elementRef = React.useRef(null)

  return (
    <ButtonStyle
      ref={elementRef}
      aria-label={defaultAriaLabel}
      disabled={props.disabled}
    >
      {props.badge}
      {props.label}
      {props.children}
    </ButtonStyle>
  )
}

class CustomButton extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    const mountPoint = document.createElement("span")
    this.attachShadow({ mode: "open" }).appendChild(mountPoint)
    const props = {
      ariaLabel: this.getAttribute("aria-label") || "",
      label: this.getAttribute("label") || "",
      badge: this.getAttribute("badge") || "",
      disabled: this.hasAttribute("disabled"),
    }
    ReactDOM.render(<Button {...props} />, mountPoint)
  }
}

export default Button

if (typeof window !== "undefined") {
  window.customElements.get("uc-button") ||
    window.customElements.define("uc-button", CustomButton)
}
