import React from 'react'
import './pagination.scss';

function Pagination ({ newsPerPage, totalNews, paginate, currentPage }) {
    let pageNumbers = [];
    const length = Math.ceil(totalNews/newsPerPage)
    for (let i = 1; i <= length; i++) {
        pageNumbers.push(i);
    }
    console.log(length);
    const handleNext = () => {
        const next = currentPage + 1
        if(next<=length) {
            paginate(currentPage + 1)
         
        }
        else {
            paginate(currentPage);         
        }
        
    }
    const handlePrevious = () => {
        const previous = currentPage - 1
        if(previous>=1) {
            paginate(currentPage - 1)
           
        }
        else {
            paginate(currentPage);
            
            
        }
        
    }
    let val1 = '<<'
    let val2 ='>>'
  return (
      <div className="pagination">
          <div className={ `next ${currentPage=== 1? "active" : ""}` } onClick={handlePrevious}><p>{val1}</p></div>
          { pageNumbers.map(number => {
              return <div className="page" key={ number }>
                  <p className={ `normal ${currentPage === number ? 'active' : 'normal'}` } onClick={ () =>  paginate(number)}>
                      {number} 
                  </p>
                  
              </div>
              
          }) }<div className={ `next ${currentPage===length? "active" : ""}` } onClick={handleNext}><p>{val2}</p></div>
    </div> 
  )
}

export default Pagination