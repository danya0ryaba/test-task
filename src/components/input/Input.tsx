import React from 'react'
import s from './input.module.scss'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    id: string,
    inputValue: string,
    setInput: (value: string) => void
}

export const InputCustom: React.FC<InputProps> = ({ id, label, type, inputValue, setInput }) => {

    if (!type) {
        type = 'text'
    }
    return (
        <div className={s.input}>
            <label className={s.input__label} htmlFor={`${id}`}>{label}</label>
            <input value={inputValue} onChange={(e) => setInput(e.currentTarget.value)} className={s.input__input} id={id} type={type} />
        </div>
    )
}
