import React, { useState, useEffect } from 'react';
import './App.scss';
import News from './components/News'
import Pagination from './components/Pagination'

function App () {

  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 6;
  useEffect(() => {
    async function fetchNews () {
      const data = await fetch('https://newsapi.org/v2/everything?q=Apple&from=2022-06-07&sortBy=popularity&apiKey=052597d1b993423bae46346b524fe5d5')
      const posts = await data.json();
      setNews(posts.articles);
      
  
    }
    fetchNews();
  }, [])
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews)
 //To change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <div className="header">
        <h1>NewsOnline</h1>
      </div>
      <div className="subheader">
        <h2>Latest News</h2>
        <div className="line"></div>
        <div className="posts">
        { currentNews.map((item) => {
          return <News key={ item.title } item={ item } />
          
        }) }
          
        </div>
      <Pagination newsPerPage={newsPerPage } totalNews={news.length} paginate={paginate} currentPage={currentPage}/>
      </div>
        
    </div>
  )
  
}

export default App