import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import styled from 'styled-components'
import ServiceImg from '../../assets/images/food.png'

const ServicosHome = () => {
    return (
        <Servicos>
            <Container className="py-5">
                <h2 className="text-center">Servicos</h2>
                <Row>
                    <Item>asdas</Item>
                    <Item>asdasd</Item>
                    <Item>asdas</Item>
                </Row>
            </Container>
        </Servicos>
    )
}

export default ServicosHome


const Servicos = styled.div`
    height: 400px;
    width: 100%;
    background-image: url(${ServiceImg})
`
const Item = styled(Col)`
    text-align: center;
    background: #ccc6;
    height: 200px;
    margin: 5px;
`
