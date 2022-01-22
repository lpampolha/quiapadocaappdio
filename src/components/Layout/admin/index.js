import React from 'react'
import '../../../assets/css/sb-admin-2.min.css'

import Sidebar from './sidebar'
import Header from './header'
const LayoutAdmin = ({ children, Menu }) => {
    return (
        <div id="wrapper">
            <Sidebar Menu={Menu} />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Header />
                    <div className="container-fluid">
                        {children}
                    </div>
                </div>

            </div>
        </div>

    )
}

export default LayoutAdmin
