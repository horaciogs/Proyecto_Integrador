import React from 'react';
import {Link} from 'react-router-dom';
function ProductList(props){
    return (
        <React.Fragment>
            <tr>
                <td>{props.id}</td>
                <td>
                <Link to={"/ProductDetail/" + props.id }>
                    <span>{props.name}</span>
                </Link>
                </td>
                <td>{props.categorys.category}</td>
                <td>{props.detail}</td>
                <td>{props.price}</td>
            </tr>
        </React.Fragment>
    )
}
export default ProductList;