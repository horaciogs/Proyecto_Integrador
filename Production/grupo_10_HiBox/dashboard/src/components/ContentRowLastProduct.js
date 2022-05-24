 
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//import ProductDetail from './ProductDetail';
//import imagenFondo from '../assets/images/img-product.jpg';

class ContentRowLastProduct extends Component {
    constructor(){
        super()
        this.state ={
            lastProduct : []
        }
    }

    componentDidMount(){
        fetch('/api/products')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(products =>{
            //console.log(products)
            let lastProduct = products.data.pop();
            this.setState({lastProduct: lastProduct})
        })
        .catch(error => console.log(error))
    }

    render () {
        return(
            <React.Fragment>
                <div className="col-lg-6 mb-4">
                                <div className="card shadow mb-4">
                                    <div className="card-header py-3">
                                        <h5 className="m-0 font-weight-bold text-gray-800">Último producto ingresado en la Base de Datos</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="text-center">
                                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={this.state.lastProduct.productImage} alt="Producto - Hibox "/>
                                        </div>
                                        <h3>{this.state.lastProduct.name}</h3>
                                        
                                        <Link className="btn btn-danger" to={"/ProductDetail/" + this.state.lastProduct.id }>
                                            <span>Detalle</span>
                                        </Link>
                                    </div>
                                </div>
                 </div>
            </React.Fragment>
        )
    }
}

export default ContentRowLastProduct;
