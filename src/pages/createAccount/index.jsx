import { Button } from '../../components/Button';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Container, TextContent, Title, TenhoConta } from './styles'
import { Input } from '../../components/Input';

import React from 'react'
import { useForm } from 'react-hook-form';
import { Header } from '../../components/Header';

const CreateAccount = () => {
    const { control } = useForm({

        mode: 'onChange',
    })
    return (
        <>
            <Header />
            <Container>
                <div>
                    <Title>
                        A plataforma para você apredender com experts, dominar as principais
                        tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </div>
                <div>
                    <Title>
                        Comece agora grátis
                    </Title>
                    <TextContent>Crie sua conta e make the change</TextContent>
                    <form>
                        <Input name='nome' placeholder="Nome completo" leftIcon={<MdPerson />} control={control} />
                        <Input name='email' placeholder="E-mail" leftIcon={<MdEmail />} control={control} />
                        <Input name='senha' placeholder="Senha" leftIcon={<MdLock />} control={control} />

                        <Button title="Criar minha conta" variant="secondary" />
                    </form>
                    <TextContent>
                        Ao clicar em "criar minha conta",
                        declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                    </TextContent>

                    <TenhoConta>
                        Já tenho uma conta. 
                        <a href="/login"> Fazer login</a>
                    </TenhoConta>
                </div>


            </Container>
        </>
    )
}

export { CreateAccount }
