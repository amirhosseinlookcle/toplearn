import React, { Fragment } from 'react';
import Footer from '../components/common/Footer';
import Course from '../components/Courses/Course';
import MainNav from '../components/Navs/MainNav';
import TopNav from '../components/Navs/TopNav';
import Header from '../components/common/Header';

const Toplearn = (props) => {
    return (
        <Fragment>

            <div className="landing-layer">
                <div className="container">
                    <TopNav />
                    <Header />
                </div>
            </div>




            <MainNav />

            <main id="home-page">
                <div className="container">



                    <Course />


                </div>
            </main>

            <Footer />
        </Fragment>


    );
}

export default Toplearn;