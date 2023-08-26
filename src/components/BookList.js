import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Books_API } from '../API_URLs';
import '../styles/book-list.css';
import { Link } from 'react-router-dom';
import img from './images/imgbin_charlottes-web-artists-book-reading-book-review-png.png';
// import { VscSearch } from 'react-icons/vsc';

export default function BookList() {
  const [books, setBooks] = useState([]);
  const [filteredData, setFilterdata] = useState([]);
  useEffect(() => {
    let fetchBooks = async () => {
      let response = await axios.get(Books_API);
      setBooks(response.data);
    };
    fetchBooks();
  }, []);
  var handlefilter = (e) => {
    var searchWord = e.target.value;
    var newFilter = books.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase()); //{ || value.original_name.toLowerCase().includes(searchWord.toLowerCase());}
    });
    setFilterdata(newFilter);
  };
//   var handleKeys = () => {
//     window.addEventListener('keyup', handlefilter);
//   };
//   window.removeEventListener('keyup', () => true);
  return (
    <div>
      <div>
        <div className='nav'>
          <div className='bookList_books'>Books</div>
          <div>
            <Link className='bookList_Authors' to={`/authors`}>
              Authors
            </Link>
          </div>
        </div>
      </div>
      <div className='header'>
        <div className='row1 col-lg-5 col-md-5'>
          <h1>
            "A Book is uniquely
            <br /> portable magic"
          </h1>
        </div>
        <div className='row2 col-lg-7 col-mg-5'>
          <h2>Find Your Book</h2>
          <div className='search'>
            <input
              type='text'
              placeholder='Enter your Book Name..'
              onKeyUp={handlefilter}
            />
          </div>
          <img src={img} />
        </div>
      </div>
      <div className='book-list-bottom row'>
        {filteredData.length > 0
          ? filteredData.length &&
            filteredData.map((item, index) => (
              <div key={index} className='col-lg-3 col-md-6 col-sm-12'>
                <div className='book-i'>
                  <div>
                    <img className='book-img' src={item.image_url} />
                  </div>
                  <div className='h2_title'>
                    <h2>
                      <Link item={item} className='title' to={`/description/${item.id}`}>
                        {item.title}
                      </Link>
                    </h2>
                  </div>
                </div>
              </div>
            ))
          : books.length &&
            books.map((item, index) => (
              <div key={index} className='col-lg-3 col-md-6 col-sm-12'>
                <div className='book-i'>
                  <div>
                    <img className='book-img' src={item.image_url} />
                  </div>
                  <div className='h2_title'>
                    <b>
                      <Link item={item} className='title' to={`/description/${item.id}`}>
                        {item.title}
                      </Link>
                    </b>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
