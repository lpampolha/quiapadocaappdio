import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import ServiceItem1 from '../../../assets/images/service1.jpg'
import ServiceItem2 from '../../../assets/images/service2.png'
import ServiceItem3 from '../../../assets/images/service3.jpg'

import TitlePage from '../../../components/titlePage'

export default () => {
    return (
        <Service>
            <TitlePage title="Serviços" sub="Obtenha informações de nossos serviços." />
            <Container>
                <Row>
                    <ServiceItem>
                        <Service1 />
                    </ServiceItem>
                    <ServiceItem>
                        <Service2 />
                    </ServiceItem>
                    <ServiceItem>
                        <Service3 />
                    </ServiceItem>
                </Row>
            </Container>

        </Service>
    )
}


const Service = styled.div`
    display:block;
    height: 500px;
`


const ServiceItem = styled(Col)`
    height: 200px;
    width: 20%;
`
const Service1 = styled.div`
    background-image: url(${ServiceItem1});
    height: 200px;
    width: 200px;
    margin: 40px;
`
const Service2 = styled.div`
    background-image: url(${ServiceItem2});
    height: 200px;
    width: 200px;
    margin: 40px;
`
const Service3 = styled.div`
    background-image: url(${ServiceItem3});
    height: 200px;
    width: 200px;
    margin: 40px;
`
