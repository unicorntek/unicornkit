import React, { FC } from "react"
import ReactDOM from "react-dom"
import { AvatarProps } from "./type"

const Avatar: FC<AvatarProps> = () => {
  return <span>Avatar</span>
}

class CustomButton extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    const mountPoint = document.createElement("span")
    this.attachShadow({ mode: "open" }).appendChild(mountPoint)
    const props = {}
    ReactDOM.render(<Avatar {...props} />, mountPoint)
  }
}

export default Avatar

if (typeof window !== "undefined") {
  window.customElements.get("uc-button") ||
    window.customElements.define("uc-button", CustomButton)
}
