import React, { useRef } from 'react'
import s from './input.module.scss'
import closeSvg from '../../assets/close.svg'


// сделать с forwarRef для доступа к данным инпут submit

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    id: string
}

export const InputCustom: React.FC<InputProps> = ({ id, label, type }) => {

    const inputEl = useRef<HTMLInputElement | null>(null)

    const [close, setClose] = React.useState(false)

    const onHandlerClose = () => {
        if (inputEl.current) {
            inputEl.current.value = ""
        }
        setClose(false)
    }

    const onHandlerFocusInput = () => {
        setClose(true)
    }

    const onHandlerBlurInput = () => {
        setTimeout(() => {
            setClose(false)
        }, 0)
    }


    // const onHandlerChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {

    // }

    if (!type) {
        type = 'text'
    }

    return (
        <div className={s.input}>

            <label className={s.input__label} htmlFor={`${id}`}>{label}</label>

            <div className={s.input__for_close}>
                <input ref={inputEl}
                    onFocus={onHandlerFocusInput}
                    onBlur={onHandlerBlurInput}
                    // onChange={onHandlerChangeInput}
                    className={s.input__input}
                    id={id}
                    type={type}
                />
                {close && <button onClick={onHandlerClose} className={s.closeSvg}>
                    <img className='' src={`${closeSvg}`} alt="close" />
                </button>}
            </div>
        </div>
    )
}








export const InputCustomWuthRef = React.forwardRef<HTMLInputElement, InputProps>(({ id, label, type }, ref) => {



    const [close, setClose] = React.useState(false)

    const onHandlerClose = () => {
        // @ts-ignore
        let currentValue = ref?.current.value

        if (ref && currentValue.length > 1) {
            currentValue = "";
            // @ts-ignore
            ref.current.value = currentValue
        }

        setClose(false)
    }

    const onHandlerFocusInput = () => {
        setClose(true)
    }

    const onHandlerBlurInput = () => {
        setTimeout(() => {
            setClose(false)
        }, 0)
    }


    // const onHandlerChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {

    // }

    if (!type) {
        type = 'text'
    }

    return (
        <div className={s.input}>

            <label className={s.input__label} htmlFor={`${id}`}>{label}</label>

            <div className={s.input__for_close}>
                <input
                    ref={ref}
                    onFocus={onHandlerFocusInput}
                    onBlur={onHandlerBlurInput}
                    // onChange={onHandlerChangeInput}
                    className={s.input__input}
                    id={id}
                    type={type}
                />
                {close && <button
                    onClick={onHandlerClose}
                    className={s.closeSvg}>
                    <img className='' src={`${closeSvg}`} alt="close" />
                </button>}
            </div>
        </div>
    )
})