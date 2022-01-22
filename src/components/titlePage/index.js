import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'
export default ({ title, sub }) => {
    return (
        <ContainerTitle>
            <Container>
                <Title>{title}</Title>
                <Sub>{sub}</Sub>
            </Container>
        </ContainerTitle>
    )
}



const ContainerTitle = styled.div`
 background: #fac564;
    padding: 10px;
    font-family: 'Poppins', sans-serif;

`
const Title = styled.div`
    color: #fff;
    font-size: 30px;
    font-weight: 600;
`
const Sub = styled.div`
   color: #eee;
   font-size: 20px;
   font-family: 'Josefin Sans', sans-serif;
`
