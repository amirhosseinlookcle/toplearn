import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import Pagination from '../common/Pagination';

const Course = ({ courses }) => {
    return (
        <section className="terms-items">
            <header>
                <h2> آخرین دوره های تاپ لرن </h2>
                <NavLink to="/archive"> مشاهده همه دوره ها </NavLink>
            </header>
            <div className="row">

                {courses.map(course => {
                    const { _id, imageUrl, title } = course
                    return (
                        <div key={_id} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                            <article>
                                <Link to={`/singlecourse/${_id}`} className="img-layer"><img src={`https://toplearnapi.ghorbany.dev/${imageUrl}`} /></Link>
                                <h2><Link to={`/singlecourse/${_id}`}> {title} </Link></h2>
                                <span> رایگان </span>
                                <i>1:52:32</i>
                            </article>
                        </div>
                    )
                })}



            </div>
        </section>
    );
}

export default Course;
