import React from 'react';

function UserList(props){
    let user= "";
    if (props.userPrivilege) {
        user = "Administrador"
    } else {
        user = "Usuario"
    };
    return (
        <React.Fragment>
            <tr>
                <td>{props.id}</td>
                <td>{props.firstName}</td>
                <td>{props.lastName}</td>
                <td>{props.email}</td>
                <td>{user}</td>
            </tr>
        </React.Fragment>
    )
}
export default UserList;