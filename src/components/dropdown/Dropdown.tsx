import React from 'react'
import s from './dropdown.module.scss'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../redux/hooks/redux-hooks'
import { putInArchive, removeUser } from '../../redux/reducers/usersSlice'
import { DropdownType } from '../../types/types'

export const Dropdown: React.FC<DropdownType> = ({ id, setDropdown }) => {

    const dispatch = useAppDispatch()

    const onHandlerArchive = () => {
        dispatch(putInArchive(id))
        setDropdown(false)
    }

    const onHandlerRemove = () => {
        dispatch(removeUser(id))
    }

    return (
        <ul className={s.dropdown}>
            <li>
                <Link to={`user/${id}`}>
                    Редактировать
                </Link>
            </li>
            <li onClick={onHandlerArchive}>Архивировать</li>
            <li onClick={onHandlerRemove}>Скрыть</li>
        </ul>
    )
}