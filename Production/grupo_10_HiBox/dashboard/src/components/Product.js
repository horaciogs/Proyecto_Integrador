//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import React, {Component} from 'react';

//Importar nuestro componente
import ProductList from './ProductList';

class Product extends Component{
    constructor(){
        super()
        this.state ={
            products : []
        }
    }
    //Compomentes Ciclo de vida - Montar - Actualizar - Desmontar
    //Montaje
    componentDidMount(){
        fetch('/api/products')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(products =>{
            //console.log(products)
            this.setState({products: products.data})
        })
        .catch(error => console.log(error))
    }


    render(){
        return (
            <React.Fragment>
            {/*<!-- products LIST -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
            <div className="col-lg-12 mb-4">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h5 className="m-0 font-weight-bold text-gray-800">Todos los productos en Base de Datos</h5>
                            </div>
                            <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Categoría</th>
                                    <th>Detalle</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    //console.log(this.state.products)
                                    this.state.products.map((product,index)=>{
                                        return <ProductList  {...product} key={index}  />
                                    })
                                }
                            </tbody>
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
export default Product;
