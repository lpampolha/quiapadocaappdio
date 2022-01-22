import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import history from './config/history'

// import LayoutAdmin from './components/Layout/admin';
import LayoutPortal from './components/Layout/portal';
//auth
// import Login from './views/auth/login';

// //admin
// import ProductsAdmin from './views/admin/products'
// import CategoriesAdmin from './views/admin/categories'
// //import ServicesAdmin from './views/admin/services'

//portal
import Home from './views/portal/home'
import About from './views/portal/about'
import Product from './views/portal/product'
import Services from './views/portal/service'
import Contato from './views/portal/contact'


const Routers = () => (
    <Router history={history}>
        <Switch>

            <Route path="/">
                <LayoutPortal>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/sobre" component={About} />
                    <Route exact path="/produtos" component={Product} />
                    <Route exact path="/servicos" component={Services} />
                    <Route exact path="/contato" component={Contato} />
                </LayoutPortal>
            </Route>

        </Switch>
    </Router>
)

export default Routers;