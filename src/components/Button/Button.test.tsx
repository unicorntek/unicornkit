import React from "react";
import {render} from "@testing-library/react"

import Button from './button'


describe("Button", () => {
    test("renders the button component", () => {
        render(<Button label="Hello world!" />)
    })
})
