import React from 'react'
import { Container } from '../components/container/Container'
import { Title } from '../components/title/Title'

export const Home: React.FC = () => {
    return (
        <Container>
            <section>
                {/* отступ сверху для секции */}
                <Title>Активные</Title>
            </section>
        </Container>
    )
}
