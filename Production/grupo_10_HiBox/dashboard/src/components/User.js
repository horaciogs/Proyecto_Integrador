//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import React, {Component} from 'react';

//Importar nuestro componente
import UserList from './UserList';

class User extends Component{
    constructor(){
        super()
        this.state ={
            users : []
        }
    }
    //Compomentes Ciclo de vida - Montar - Actualizar - Desmontar
    //Montaje
    componentDidMount(){
        fetch('/api/users')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(users =>{
            //console.log(users)
            this.setState({users: users.data})
        })
        .catch(error => console.log(error))

    }


    render(){
        return (
            <React.Fragment>
            {/*<!-- users LIST -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
            <div className="col-lg-12 mb-4">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h5 className="m-0 font-weight-bold text-gray-800">Todos los usuarios en Base de Datos</h5>
                            </div>
                            <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>E-mail</th>
                                    <th>Privilegios</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                    //console.log(this.state.users)
                                    this.state.users.map((user,index)=>{
                                        return <UserList  {...user} key={index}  />
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
export default User;
