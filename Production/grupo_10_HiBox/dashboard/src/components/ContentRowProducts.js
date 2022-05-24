import React, { Component, Fragment } from 'react';
import SmallCard from './SmallCard';


//definir componente tipo clase para usar State...
class ContentRowTop extends Component{
    constructor(props){
        super(props);
        this.state = {
            cardProps: []
        }
    }

    //se llama a los usuarios y se guarda en el estado...
    callUser(url){
        fetch(url)
        .then(response => response.json())
        .then(data => this.setState(prevState => ({
            cardProps: [...prevState.cardProps, {
                color:   "warning",
                titulo: "Usuarios en la Base de datos",
                valor: data.meta.total,
                icono: "fas fa-user",
            }]
        }))
        )
        .catch(error => console.log(error))
    }

    callCategories(url){
        fetch(url)
        .then(response => response.json())
        .then(data => this.setState(prevState => ({
            cardProps: [...prevState.cardProps, {
                color:   "success",
                titulo: "Categorias en la Base de datos",
                valor: data.meta.total,
                icono: "fas fa-list text-gray-300",
            }]
        }))
        )
        .catch(error => console.log(error))
    }

    callProducts(url){
        fetch(url)
        .then(response => response.json())
        .then(data => this.setState(prevState => ({
            cardProps: [...prevState.cardProps, {
                color:   "primary",
                titulo: "Productos en la Base de datos",
                valor: data.meta.total,
                icono: "fas fa-boxes text-gray-300",
            }]
        }))
        )
        .catch(error => console.log(error))
    }


    //llamamos a los metodos para llenar el array de cardProps: []
    componentDidMount(){
        console.log('Mounted');
        this.callUser('/api/users/')
        this.callCategories('/api/categorys/')
        this.callProducts('/api/products/')
    }

    render(){
        console.log('Rendered');

    //rederizado....
    return (
        <Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                this.state.cardProps.map((cardItem,index)=>{
                    return <SmallCard  {...cardItem}  key= {index}/>
                })
            }
        </div>
        </Fragment>
    )
}
}

export default ContentRowTop;