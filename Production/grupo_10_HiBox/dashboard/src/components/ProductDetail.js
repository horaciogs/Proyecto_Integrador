import React, {Component} from 'react';

class ProductDetail extends Component{

    constructor(props){
        super(props)
        this.state ={
            product : {},
            cat: {},
            sub: {}
        }
    }
    //obtenemos la url del nav, se separa por / y se toma el ultimo valor (en este caso seria 2 = id)
    componentDidMount(){
        let id = window.location.pathname.split('/')[2];
        fetch('/api/products/' + id )
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(products =>{
            console.log(products.data)
            this.setState({
                product: products.data,
                cat: products.data.categorys,
                sub: products.data.subcategorys
            })
        })
        .catch(error => console.log(error))
    }


    render(){
        return (
            <React.Fragment>
            {/*<!-- product Detail -->*/}
            <div id="content-wrapper" className="d-flex flex-row">
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Imagen de Producto</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={this.state.product.productImage} alt="Producto - Hibox "/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Detalle de Producto</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-left">
                            <h3>{this.state.product.name}</h3>
                            <p>{this.state.product.detail}</p>
                        </div>
                        <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                 <tr>
                                    <th>Id</th>
                                    <td>{this.state.product.id}</td>
                                </tr>
                                <tr>
                                    <th>ID Categoría</th>
                                    <td>{this.state.cat.category}</td>
                                </tr>
                                <tr>
                                    <th>ID SubCategoría</th>
                                    <td>{this.state.sub.subCategory}</td>
                                </tr>
                                <tr>
                                    <th>Precio</th>
                                    <td>{this.state.product.price}</td>
                                </tr>
                                <tr>
                                    <th>Precio Anterior</th>
                                    <td>{this.state.product.priceBefore}</td>
                                </tr>
                            </thead>
                        </table>

                        </div>
                    </div>
                </div>
            </div>
            </div>

    </React.Fragment>
        )
    }
}
export default ProductDetail;

