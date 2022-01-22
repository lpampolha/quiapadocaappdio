import React from 'react'
import styled from 'styled-components'

const BannerHome = () => {
    return (
        <Banner>
        </Banner>
    )
}

export default BannerHome


const Banner = styled.div`
    display: ${props => props.hidden === true ? 'none' : 'block'};
    height: 300px;
    width: 100%;
    background: #2f3542;


`