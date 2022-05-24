import React from 'react';
import image from '../assets/images/logo-HiBox.png';
import ContentWrapper from './ContentWrapper';
import {Link, Route, Routes} from 'react-router-dom'
import CategorysInDb from './CategorysInDb';
import User from './User';
import Product from './Product';
import ProductDetail from './ProductDetail';
import Error404 from './Error404';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - DH HiBox</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Acciones</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/Product">
                        <i className="fas fa-boxes"></i>
                        <span>Productos</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/CategorysInDb">
                        <i className="fas fa-list"></i>
                        <span>Categorías</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/User">
                        <i className="fas fa-user"></i>
                        <span>Users</span>
                    </Link>
                </li>


                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            <Routes>
                <Route path="/ProductDetail/:id" element={<ProductDetail />}/>
                <Route exact path="/" element={<ContentWrapper />}/>
                <Route path="/CategorysInDb" element={<CategorysInDb />}/>
                <Route path="/Product" element={<Product />}/>
                <Route path="/User" element={<User />}/>
                <Route path="*" element={<Error404 />}/>
            </Routes>
        </React.Fragment>
    )
}
export default SideBar;