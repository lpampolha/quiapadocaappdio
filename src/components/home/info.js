
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

const InfoHome = () => {
    return (
        <Info>
            <Container>
                <Row>
                    <Col>
                    <ItemInfo>
                            <h4>(21) 0000-0000</h4>
                    </ItemInfo>
                    </Col>
                    <Col><ItemInfo></ItemInfo></Col>
                    <Col><ItemInfo></ItemInfo></Col>
                </Row>
            </Container>
        </Info>
    )
}

export default InfoHome


const Info = styled.div`
    width: 100%;
    background: #000
`

const ItemInfo = styled.div`
    background: red;
    width: 100%;
    height: 150px;
    display:flex;
    justify-content: center;
    align-items: center;
`