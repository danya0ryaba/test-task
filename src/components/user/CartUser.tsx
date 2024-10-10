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

    const onHandlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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

                    <InputCustom id='name' label='Имя' />
                    {/* <InputCustom2 id='login' label='Никнейм' />
                    <InputCustom2 id='mail' label='Почта' type='email' />
                    <InputCustom2 id='city' label='Город' />
                    <InputCustom2 id='phone' type='tel' label='Телефон' />
                    <InputCustom2 id='company' label='Название компании' /> */}

                    <Button>Сохранить</Button>

                </form>

            </div>

            {popup && createPortal(<Popup setPopup={setPopup} />, document.body)}

        </div>
    )
}
