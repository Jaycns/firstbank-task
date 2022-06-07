import React from 'react'
import './News.scss';
import { MdOutlineStarBorderPurple500 } from 'react-icons/md';

function News({item}) {
    return (

      <div className="news-container">
                <h3>{item.title }</h3>
          <div className="line"></div>
          <p>{item.description}</p>
          <div className="end">
              <a href={item.url}>Read full story</a>
              <div className="bookmark"><MdOutlineStarBorderPurple500 className="star"/><p>Add to bookmarks</p></div>
              <p>5 mins ago</p>
</div>
            </div>
    
  )
}

export default News