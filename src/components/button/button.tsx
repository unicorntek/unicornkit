import React, {FC} from 'react'

import {ButtonProps} from './type'

const Button: FC<ButtonProps> = ({label, ...props}: ButtonProps) => {
    return <button>{label}</button>
}

export default Button
