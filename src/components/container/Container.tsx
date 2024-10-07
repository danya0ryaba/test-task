import React from 'react'
import s from './container.module.scss'

type ContainerType = {
    children?: React.ReactNode
}

export const Container: React.FC<React.PropsWithChildren<ContainerType>> = ({ children }) => {
    return (
        <div className={s.container}>{children}</div>
    )
}
