import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Product from './Product';
import Footer from './Footer';
import User from './User';

function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                    <User />
                    <Product />
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    )
}

export default ContentWrapper;