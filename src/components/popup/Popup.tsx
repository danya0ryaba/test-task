import React from 'react'
import s from './popup.module.scss'
import popup from '../../assets/popup.png'
import close from '../../assets/close.svg'

type PopupType = {
    setPopup: (value: boolean) => void
}

export const Popup: React.FC<PopupType> = ({ setPopup }) => {
    return (
        <div className={s.popup}>

            <div className={s.popup__wrapper}>

                <img src={`${popup}`} alt="popup" />

                <span>Изменения сохранены!</span>

                <button className={s.close} onClick={() => setPopup(false)}>
                    <img src={`${close}`} alt="close" />
                </button>

            </div>

        </div>
    )
}
