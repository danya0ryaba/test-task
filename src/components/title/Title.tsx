import React from 'react'
import s from './title.module.scss'

type TitleType = {
    children: string
}

export const Title: React.FC<TitleType> = ({ children }) => {
    return <>
        <h2 className={s.title}>{children}</h2>
        <hr />
    </>
}
