import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import styled from 'styled-components'
import { GiSlicedBread } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'

export default (props) => {

    const menu = [
        {
            title: "Home",
            link: ''
        },
        {
            title: "Sobre",
            link: 'sobre'
        },
        {
            title: "Produtos",
            link: 'produtos'
        },
        {
            title: "Serviços",
            link: 'servicos'
        },
        {
            title: "Contato",
            link: 'contato'
        }

    ]

    return (
        <Header>
            <Container>
                <Navbar expand="lg" variant="dark">
                    <Navbar.Brand href="#home">
                        <Logo>
                            <GiSlicedBread /> Quipádoca
                            <br />
                        </Logo>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            {menu.map((item, i) => (
                                <NavLink exact={true} to={item.link} key={i}>
                                    <Nav.Link as="div">{item.title}</Nav.Link>
                                </NavLink>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </Header >
    )
}



const Header = styled.div`

    

    background-color: #111;
    font-family: 'Poppins', sans-serif;
    a{
        text-decoration: none;
    }

    .nav-link{
        
        :hover{
            color: #fac564 !important;
            font-weight: 500;
            text-decoration: none;
        }
    }
`

const Logo = styled.div`
    font-size: 35px;
    font-fontWeight: 600;
    margin:0;
    font-family: 'Josefin Sans', sans-serif;

    svg{
        color: #fac564;
        margin: -5px 1px;
    }

    span{
        color:  #fac564;
        margin:0;
        font-size: 16px;
        text-transform: uppercase;
        display: block;
        text-align: center;
        letter-spacing: 4px;
    }

`

