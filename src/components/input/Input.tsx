import React, { useRef } from 'react'
import s from './input.module.scss'
import closeSvg from '../../assets/close.svg'


// я переделываю форму, поэтому тут есть InputCustom2
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    id: string,
    inputValue: string,
    setInput: (value: string) => void
}

export const InputCustom: React.FC<InputProps> = ({ id, label, type, inputValue, setInput }) => {

    const ref = useRef(null)

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


export const InputCustom2: React.FC<InputProps> = ({ id, label, type, }) => {

    const inputEl = useRef<HTMLInputElement | null>(null)

    const [close, setClose] = React.useState(false)


    const onHandlerChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
    }

    const onHandlerClose = () => {
        console.log(inputEl.current)
    }

    if (!type) {
        type = 'text'
    }
    return (
        <div className={s.input}>
            <label className={s.input__label} htmlFor={`${id}`}>{label}</label>
            <input ref={inputEl} onChange={onHandlerChangeInput} className={s.input__input} id={id} type={type} />
            {close && (<button className={s.closeSvg}>
                <img onClick={onHandlerClose} className='' src={`${closeSvg}`} alt="close" />
            </button>)}
        </div>
    )
}