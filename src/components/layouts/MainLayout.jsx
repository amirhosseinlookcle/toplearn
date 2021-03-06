import React, { Fragment } from 'react'
import Footer from '../common/Footer';
import Header from '../common/Header';
import MainNav from '../Navs/MainNav';
import TopNav from '../Navs/TopNav';
import { useLocation } from 'react-router';
import { Helmet } from 'react-helmet';


const MainLayout = (props) => {
    const {pathname} = useLocation()
    return (
        <Fragment>
            <Helmet><title>خوردآموز تاپلرن</title></Helmet>
            <div className="landing-layer">
                <div className="container">
                    <TopNav />
                    {pathname === "/" ? <Header /> : null}
                </div>
            </div>
            <MainNav />
            <main id="home-page">
                <div className="container">{props.children}</div>
            </main>
            <Footer />

        </Fragment>
    );
}

export default MainLayout;