import React from 'react'
import s from './header.module.scss'
import logo from '../../assets/logo.svg'
import like from '../../assets/like.svg'
import bell from '../../assets/bell.svg'
import { Container } from '../container/Container'
import { Link } from 'react-router-dom'

export const Header: React.FC = () => {
    return (
        <header className={s.header}>
            <Container>
                <div className={s.header__wrapper}>

                    <Link to={'/'}>
                        <div className={s.logo}>
                            <img src={`${logo}`} alt="logo" className={s.image} />
                            <h1 className={s.title}>at-<b>work</b></h1>
                        </div>
                    </Link>

                    <nav className={s.navigate}>
                        <ul className={s.navigate__list}>
                            <li>
                                <img src={`${like}`} alt="like" />
                            </li>
                            <li>
                                <img src={`${bell}`} alt="bell" />
                            </li>
                            <li>
                                <img className={s.profile__img} src={`https://placeholder.apptor.studio/30/30/product1.png`} alt="photo user" />
                                <span className={s.name}>Ivan1234</span>
                            </li>
                        </ul>
                    </nav>

                </div>
            </Container>

        </header>
    )
}