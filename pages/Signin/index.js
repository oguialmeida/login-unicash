import React from 'react'
import {
    Container,
    StyleForm,
    Title,
    Input,
    ButtonSubmit,
    TextButton
} from './styles'
import Header from '../../components/Header'

function Signin(params) {
    return (
        <Container>
            <Header></Header>
            <StyleForm>
                <Title>Login</Title>
                <Input
                    placeholderTextColor="#808080"
                    placeholder="E-mail"
                />
                <Input
                    placeholderTextColor="#808080"
                    secureTextEntry
                    placeholder="Senha"
                />
                <ButtonSubmit>
                    <TextButton>
                        Entrar
                    </TextButton>
                </ButtonSubmit>
            </StyleForm>
        </Container>
    )
}

export default Signin