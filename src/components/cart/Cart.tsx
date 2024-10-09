import React from 'react'
import s from './cart.module.scss'
import { UserType } from '../../types/types'
import { Dropdown } from '../dropdown/Dropdown'
import { DropdownSecond } from '../dropdown/DropdownSecond'

export const Cart: React.FC<UserType> = ({ active, name, id, ...rest }) => {

    const [dropdown, setDropdown] = React.useState(false)

    const onHandlerClickDropdown = () => {
        setDropdown(prev => !prev)
    }


    return <div className={s.cart}>

        <div className={s.cart__image}>
            <img
                className={active ? s.img_archive : ''}
                src="https://placeholder.apptor.studio/300/300/product1.png" alt="user" />
        </div>

        <div className={s.cart__info}>

            <div className={s.info}>

                <div className={s.info__all}>
                    <h5 className={active ? `${s.name} ${s.name__archive}` : s.name}>{name}</h5>
                    <svg onClick={onHandlerClickDropdown} className={s.menu} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_10_6608)">
                            <path d="M10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16C10.9 16 10 16.9 10 18ZM10 6C10 7.1 10.9 8 12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6ZM10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12Z" fill="#161616" />
                        </g>
                    </svg>
                    {!active && dropdown && <Dropdown setDropdown={setDropdown} id={id} />}
                    {active && dropdown && <DropdownSecond setDropdown={setDropdown} id={id} />}
                </div>

                <span className={active ? `${s.company__archive}` : `${s.compony}`}>{rest.company.name}</span>

            </div>

            <span className={active ? `${s.city} ${s.city__archive}` : s.city}>{rest.address.city}</span>

        </div>

    </div>
}