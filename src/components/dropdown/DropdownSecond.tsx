import React from 'react'
import s from './dropdown.module.scss'
import { useAppDispatch } from '../../redux/hooks/redux-hooks'
import { activeUser } from '../../redux/reducers/usersSlice'
import { DropdownType } from '../../types/types'

export const DropdownSecond: React.FC<DropdownType> = ({ id, setDropdown }) => {

    const dispatch = useAppDispatch()

    const onHandlerActive = () => {
        dispatch(activeUser(id))
        setDropdown(false)
    }

    return (
        <ul className={s.dropdown}>
            <li onClick={onHandlerActive}>Активировать</li>
        </ul>
    )
}