import React from 'react'
import s from './user.module.scss'
import { UserType } from '../../types/types'
import { Title } from '../title/Title'
import { InputCustom } from '../input/Input'
import { Button } from '../button/Button'
import { createPortal } from 'react-dom'
import { Popup } from '../popup/Popup'


export const CartUser: React.FC<UserType> = () => {

    const [popup, setPopup] = React.useState(false)

    const [inputName, setInputName] = React.useState('')
    const [inputLogin, setInputLogin] = React.useState('')
    const [inputMail, setInputMail] = React.useState('')
    const [inputCity, setInputCity] = React.useState('')
    const [inputPhone, setInputPhone] = React.useState('')
    const [inputCompany, setInputCompany] = React.useState('')


    const onHandlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputName.length > 0 &&
            inputLogin.length > 0 &&
            inputMail.length > 0 &&
            inputCity.length > 0 &&
            inputPhone.length > 0 &&
            inputCompany.length > 0) {
            setPopup(true)
        }
    }

    return (
        <div className={s.user}>

            <div className={s.user__profile}>

                <div className={s.user__profile_image}>
                    <img src="https://placeholder.apptor.studio/300/300/product1.png" alt="profile" />
                </div>

                <div className={s.user__profile_info}>
                    <h6 className={s.data}>Данные профиля</h6>
                    <hr />
                    <input className={s.input} type="text" placeholder='Рабочее пространство' />
                    <input className={s.input} type="text" placeholder='Приватность' />
                    <input className={s.input} type="text" placeholder='Безопасность' />
                </div>

            </div>

            <div className={s.user__form}>

                <Title>Данные профиля</Title>

                <form onSubmit={onHandlerSubmit} className={s.form} action="">

                    <InputCustom inputValue={inputName} setInput={setInputName} id='name' label='Имя' />
                    <InputCustom inputValue={inputLogin} setInput={setInputLogin} id='login' label='Никнейм' />
                    <InputCustom inputValue={inputMail} setInput={setInputMail} id='mail' label='Почта' type='email' />
                    <InputCustom inputValue={inputCity} setInput={setInputCity} id='city' label='Город' />
                    <InputCustom inputValue={inputPhone} setInput={setInputPhone} id='phone' type='tel' label='Телефон' />
                    <InputCustom inputValue={inputCompany} setInput={setInputCompany} id='company' label='Название компании' />

                    <Button>Сохранить</Button>

                </form>

            </div>

            {popup && createPortal(<Popup setPopup={setPopup} />, document.body)}

        </div>
    )
}
