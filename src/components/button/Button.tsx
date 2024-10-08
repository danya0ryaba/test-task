import React from 'react'
import s from './button.module.scss'

interface ButtonCustom extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string,
    onClick?: () => void
}

export const Button: React.FC<ButtonCustom> = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className={s.button}>{children}</button>
    )
}
