import React, { Fragment } from 'react';
import Course from '../components/Courses/Course';
import {Route, Routes} from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import Login from '../components/Login/Login';
import Register from '../components/register/Register';
import Archive from '../components/Courses/Archives';
import Account from '../components/account/Account';
import SingleCourse from '../components/Courses/SingleCourse';
import { useSelector } from 'react-redux';
import { Paginate } from '../utils/paginate';

const Toplearn = (props) => {
    const courses = useSelector(state => state.courses);
    const indexCourse = Paginate(courses, 1, 8)
    return (
        <MainLayout>
            <Routes>
                <Route path='/login'  element={<Login/>}/>
                <Route path='/' element={<Course courses={indexCourse}/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/archive' element={<Archive/>}/>
                <Route path='/myaccount' element={<Account/>}/>
                <Route path='/singlecourse/:id' element={<SingleCourse/>}/>
            </Routes>
        </MainLayout>


    );
}

export default Toplearn;