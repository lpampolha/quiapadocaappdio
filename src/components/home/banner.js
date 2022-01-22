import React from 'react'
import styled from 'styled-components'
import Carousel from 'react-bootstrap/Carousel'
import { Row, Col, Button } from 'react-bootstrap'
import BgBanner from '../../assets/images/bg_4.jpg'
import Img1 from '../../assets/images/pao_4.png'
import Img2 from '../../assets/images/pao_alho.png'
//import LogoSite from '../../../assets/images/logo.png'

const BannerHome = () => {
    return (
        <Banner>
            <div className="bg">
                <BannerItem>
                    <Carousel controls={false}>
                        <Carousel.Item>
                            <Row className="mt-5 py-3 justify-content-center align-items-center">
                                <Col md={3} sm={3}>
                                    <img src={Img1} className="img-fluid" alt="" />
                                </Col>
                                <Col md={3} sm={3} className="mb-4">
                                    <div className="tag">Promoção</div>
                                    <h2 className="mb-4 title">Pão Nosso</h2>
                                    <div className="mb-4 desc">De acordo com a tradição judaico-cristã, pão ázimo foi feito pelos israelitas antes da fuga do Antigo Egito</div>
                                    <Button variant="danger">Comprar</Button>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row className="mt-5 py-3 justify-content-center align-items-center">
                                <Col md={3} sm={3}>
                                    <img src={Img2} className="img-fluid" alt="" />
                                </Col>
                                <Col md={3} sm={3} className="mb-4">
                                    <div className="tag">Promoção</div>
                                    <h2 className="mb-4 title">Pão de alho </h2>
                                    <div className="mb-4 desc">O pão-com-alho é uma iguaria originária da culinária da Itália e consiste tipicamente de algum tipo de pão guarnecido com uma mistura de alho e azeite ou manteiga</div>
                                    <Button variant="danger">Comprar</Button>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </BannerItem>
            </div>
        </Banner>
    )
}

export default BannerHome


const Banner = styled.div`
    display: ${props => props.hidden === true ? 'none' : 'block'};
    height: 500px;
    width: 100%;
    background-image: url(${BgBanner});
    background-size: 60% 100%;
    overflow: hidden;

    .bg{
        background: #0003;
        height: 500px;
    }
`

const BannerItem = styled.div`
    color: #fff
`