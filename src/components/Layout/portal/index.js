import React from 'react'
import styled from 'styled-components';

import Header from './header'
import Footer from './footer'


const Layout = ({ children }) => {
    return (
        <>
            <HeaderContainer>
                <Header />
            </HeaderContainer>
            <Content>
                {children}
            </Content>
            <FooterContainer>
                <Footer />
            </FooterContainer>

        </>
    )
}



const HeaderContainer = styled.div`
`
const Content = styled.div`
    /* background: #eee; */
    min-height: 500px;
`

const FooterContainer = styled.div``

export default Layout
