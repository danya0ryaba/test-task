import React from 'react'
import { Container } from '../components/container/Container'
import { Title } from '../components/title/Title'
import { Cart } from '../components/cart/Cart'
import s from './home.module.scss'
import { useAppSelector } from '../redux/hooks/redux-hooks'

export const Home: React.FC = () => {

    const { users, usersArchive, isLoading } = useAppSelector(state => state.usersReducer)


    return (
        <Container>
            <section className={s.home}>

                <Title>Активные</Title>

                {isLoading ?
                    <Title>Загрузка...</Title>
                    : <div className={s.carts}>
                        {users.map(user => (<Cart key={user.id} {...user} />))}
                    </div>}


                <div className="archive">

                    <Title>Архив</Title>

                    <div className={s.carts}>
                        {usersArchive.map(user => <Cart key={user.id} {...user} />)}
                    </div>
                </div>

            </section>
        </Container>
    )
}