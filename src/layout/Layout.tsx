import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/header/Header'
import { Container } from '../components/container/Container'

type MainLayoutPropsType = {
    children?: React.ReactNode
}

export const Layout: React.FC<MainLayoutPropsType> = () => {
    return (
        <div>
            <Header />
            <Container>
                <Outlet />
            </Container>
        </div>
    )
}