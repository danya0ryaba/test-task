import React from 'react'
import { Container } from '../components/container/Container'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../redux/hooks/redux-hooks'
import { fetchUser } from '../redux/reducers/userSlice'
import arrow from '../assets/arrow.svg'
import { CartUser } from '../components/user/CartUser'

export const User: React.FC = () => {

    const navigate = useNavigate()

    const dispatch = useAppDispatch()
    const { user, isLoading } = useAppSelector(state => state.userReducer)
    const currentUser = user[0]

    const { id } = useParams()

    React.useEffect(() => {
        if (id) {
            dispatch(fetchUser(Number(id)))
        }
    }, [dispatch, id])

    return (
        <Container>

            <button onClick={() => navigate(-1)}>
                <img src={`${arrow}`} alt="arrow" />
                <span>Назад</span>
            </button>

            <section>

                {isLoading ? <span>Загрузка...</span> : <CartUser {...currentUser} />}

            </section>
        </Container>
    )
}
