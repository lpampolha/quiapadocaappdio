import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'

export default () => {
    return (
        <Footer>
            <Container>
                <Row>
                    <FooterSocial>
                        <AiFillFacebook />
                        <AiFillInstagram />
                    </FooterSocial>
                    <FooterCopy>
                        <Row>
                            <Col md={12}>
                                <div className="title">Copyright 2020 - Quipádoca - Todos os Direitos Reservados</div>
                            </Col>
                        </Row>
                </FooterCopy>
                </Row>
            </Container>
        </Footer>
    )
}



const Footer = styled.div`
    html, body {height:100%;};
    position:absolute;
    bottom:0;
    width:100%;
    background: #000;
    padding: 20px;
    height: 90px;
    color: #eee;
    textwidget custom-html-widget
    font-size: 8px;
    font-weight: 300;
    color: #fac564;
`
const FooterSocial = styled.div`
    cursor: pointer;
    width: 100%;
    background: #000;
    border-bottom: 1px #ccc;
    padding: 5px;
    svg {
        font-size: 30px;
        :hover{
            color: #fac564;
        }
    }
`
const FooterCopy = styled.div`
    background: #000;
    width: 100%;
    font-size: 12px;
    padding: 0px;
    text-align: center;
`