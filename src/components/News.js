import React, {useState} from 'react'
import './News.scss';
import { MdOutlineStarBorderPurple500 } from 'react-icons/md';
//import Bookmark from 'react-bookmark';

function News ({ item }) {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
       

    }
    let date = new Date(item.publishedAt)
    let timeNow = new Date();
    let hourDiff = Math.floor((timeNow - date) / 3600000);
    let minDiff = Math.floor((timeNow - date) / 60000);
    let dayDiff = Math.floor((timeNow - date) / (3600000*24));
   
    console.log(date);
    return (
      <div className="news-container">
        <h3>{item.title}</h3>
        <div className="line"></div>
        <p>{item.description}</p>
        <div className="end">
          <a href={item.url}>Read full story</a>
          <div className="bookmark" onClick={handleClick}>
            <MdOutlineStarBorderPurple500
              className={`star ${active ? "active" : ""}`}
            />
            <p>Add to bookmarks</p>
          </div>
          <p>
            {" "}
            {dayDiff < 1
              ? hourDiff < 1
                ? `${minDiff} mins`
                : `${hourDiff} ${hourDiff > 1 ? "hours" : "hour"}`
              : `${dayDiff} ${dayDiff > 1 ? "days" : "day"}`}{" "}
            ago
          </p>
        </div>
      </div>
    );
}

export default News