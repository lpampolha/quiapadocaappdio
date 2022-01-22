import React from 'react'
import { Link } from 'react-router-dom'
import ItemMenu from './itemMenu'

const Sidebar = () => {

    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar" >

            <Link to={'/admin'} className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html" >
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink" />
                </div>
                <div className="sidebar-brand-text mx-3">Quipádoca</div>
            </Link >
            < hr className="sidebar-divider " />
            <ItemMenu link="/admin" name="Home" />
            <ItemMenu link="/admin/categorias" name="Categorias" />
            <ItemMenu link="/admin/produtos" name="Produtos" />

        </ul >
    )
}

export default Sidebar