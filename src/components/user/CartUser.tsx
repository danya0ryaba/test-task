import React from 'react'
import s from './user.module.scss'
import { UserType } from '../../types/types'
import { Title } from '../title/Title'
import { InputCustomWuthRef } from '../input/Input'
import { Button } from '../button/Button'
import { createPortal } from 'react-dom'
import { Popup } from '../popup/Popup'

// переписать форму

export const CartUser: React.FC<UserType> = () => {

    const refName = React.useRef<null | HTMLInputElement>(null)
    const refLogin = React.useRef<null | HTMLInputElement>(null)
    const refMail = React.useRef<null | HTMLInputElement>(null)
    const refCity = React.useRef<null | HTMLInputElement>(null)
    const refPhone = React.useRef<null | HTMLInputElement>(null)
    const refCompany = React.useRef<null | HTMLInputElement>(null)

    const [popup, setPopup] = React.useState(false)


    function checkedLengthInput(value: string) {
        return value.length > 1 ? true : false
    }

    const onHandlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        console.log(refName.current?.value)
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

                    <InputCustomWuthRef ref={refName} id='name' label='Имя' />
                    <InputCustomWuthRef ref={refLogin} id='login' label='Никнейм' />
                    <InputCustomWuthRef ref={refMail} id='mail' label='Почта' type='email' />
                    <InputCustomWuthRef ref={refCity} id='city' label='Город' />
                    <InputCustomWuthRef ref={refPhone} id='phone' type='tel' label='Телефон' />
                    <InputCustomWuthRef ref={refCompany} id='company' label='Название компании' />


                    <Button>Сохранить</Button>

                </form>

            </div>

            {popup && createPortal(<Popup setPopup={setPopup} />, document.body)}

        </div>
    )
}
