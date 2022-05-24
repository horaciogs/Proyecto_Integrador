import React ,{ useEffect, useState } from 'react';
import Category  from './Category';


function CategorysInDb () {

    const [categorys, setCategorys] = useState([])

    useEffect(() => {

        fetch('/api/categorys')
            .then( respuesta => {
                return respuesta.json()
            })
            .then(categorys => {

                setCategorys(categorys.data)

            })
            .catch(error => console.log(error))

    },[])


        return (
            <React.Fragment>
                    {/*<!-- Categories in DB -->*/}
                    <div className="col-lg-6 mb-4">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h5 className="m-0 font-weight-bold text-gray-800">Categorías en la Base de Datos</h5>
                            </div>
                            <div className="card-body fondoCaja">
                                <div className="row">
                                    {
                                        categorys.map((category,index)=>{
                                            return  <Category  {...category}  key={index} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        )
}
export default CategorysInDb;