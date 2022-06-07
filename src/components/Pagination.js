import React from 'react'
import './pagination.scss';

function Pagination ({ newsPerPage, totalNews }) {
    let pageNumbers = [];
    for (let i = 0; i <= Math.ceil(totalNews/newsPerPage); i++) {
        pageNumbers.push(i);
    }
    console.log(pageNumbers);
  return (
      <div className="pagination">
          { pageNumbers.map(number => {
              <div className="page" key={ number }>
                  <a href="#" className="page-link">
                      {number} 22222222 4 5 5 6 6 6 5
                  </a>
              </div>
          })}
    </div> 
  )
}

export default Pagination