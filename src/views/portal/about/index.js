import React from 'react'
import styled from 'styled-components'
import TitlePage from '../../../components/titlePage'
import BalcaoImg from '../../../assets/images/padaria.jpeg'

export default () => {
    return (
        <About>
            <TitlePage title="Sobre" sub="Conheça nossa história" />

            <Description>
            </Description>
            <Collaborators>
                <Balcao></Balcao>
                <TextAbout>
                    Pães, baguetes, frios, doces, bolos, tortas, sucos, chás, leite, iogurtes, cafés... 
                    tudo isso e muito mais você encontra na Quipádoca! Com o objetivo de oferecer o melhor 
                    aos nossos clientes e com um atendimento personalizado, a padaria sempre busca produtos 
                    frescos e deliciosos. Do café da manhã ao lanche da tarde, do salgado ao doce, é só escolher!
                    <br />
                    Nosso trabalho é pautado a partir dos valores de qualidade, excelência e inovação, que podem ser 
                    reconhecidos em nossa loja e equipe. E não poderíamos esquecer do nosso ingrediente mais especial: 
                    a amizade e dedicação com nossos clientes. Nossas portas estão sempre abertas para atender bem e 
                    oferecer os melhores produtos e serviços.
                </TextAbout>

                

            </Collaborators>
        </About>
    )
}


const About = styled.div`
    display:block;
`
const Description = styled.div`
    width: 100%;
    display:block;
`
const Collaborators = styled.div`

    width: 100%;
    padding: 10px 0;
`
const TextAbout = styled.p`
    width: 500px;
    margin: 10px;
    color: #fff;
    float: right;
`
const Balcao = styled.div`
    background-image: url(${BalcaoImg});
    width: 550px;
    height: 400px;
    margin: 0 0 0 20px;
    padding: 0 0 0 20px;
    float: left;
`