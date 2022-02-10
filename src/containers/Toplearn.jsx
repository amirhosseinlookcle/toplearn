import React, { Fragment } from 'react';
import Course from '../components/Courses/Course';
import {Route, Routes} from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import Login from '../components/Login/Login';
import Register from '../components/register/Register';

const Toplearn = (props) => {
    return (
        <MainLayout>
            <Routes>
                <Route path='/login'  element={<Login/>}/>
                <Route path='/' element={<Course/>}/>
                <Route path='/register' element={<Register/>}/>
            </Routes>
        </MainLayout>


    );
}

export default Toplearn;