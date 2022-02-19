import React from "react";
import { range } from "lodash";
const Pagination = ({totalCourses, currentPage, perPage, onPageChange}) => {
    const pageCount = Math.ceil(totalCourses / perPage);
    if (pageCount == 0) return null;
    const pages = range(1, pageCount + 1);
    console.log(pages);
    return (
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
            {pages.map(page => {

                return(
                    <li key={page} className={page === currentPage ? "page-item active" : "page-item"}>
                        <a className="page-link" href="#" style={{cursor: "pointer"}} onClick={() => onPageChange(page)}>
                         {page}
                        </a>
                    </li>
                )
            })}
              
            </ul>
        </nav>
    );
};

export default Pagination;
