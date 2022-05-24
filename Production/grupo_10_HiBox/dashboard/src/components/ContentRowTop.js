import React from 'react';
import CategorysInDb from './CategorysInDb';
import ContentRowProducts from './ContentRowProducts';
import ContentRowLastProduct from './ContentRowLastProduct';

function ContentRowTop(){

    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Panel de control de la aplicación</h1>
					</div>

					{/*<!-- Content Row Products-->*/}
					<ContentRowProducts />
					{/*<!-- End Products in Data Base -->*/}

					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						
						<ContentRowLastProduct />

						{/*<!-- End content row last product in Data Base -->*/}

						{/*<!-- Categorys in DB -->*/}
						
						<CategorysInDb />

						{/*<!--End Categorys In Db-->*/}
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;