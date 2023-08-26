import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Books_API } from '../API_URLs';
import '../styles/book-list.css';
import { Link } from 'react-router-dom';
// import img from './images/imgbin_charlottes-web-artists-book-reading-book-review-png.png';
// import { VscSearch } from 'react-icons/vsc';

export default function BookList() {
  const [books, setBooks] = useState([]);
  const [filteredData, setFilterData] = useState([]);
  useEffect(() => {
    let fetchBooks = async () => {
      let response = await axios.get(Books_API);
      setBooks(response.data);
    };
    fetchBooks();
  }, []);
  var handleFilter = (e) => {
    var searchWord = e.target.value;
    var newFilter = books.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase()); //{ || value.original_name.toLowerCase().includes(searchWord.toLowerCase());}
    });
    setFilterData(newFilter);
  };
  //   var handleKeys = () => {
  //     window.addEventListener('keyup', handleFilter);
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
      <div className='header d-flex row align-items-center'>
        <div className='row1 text-white'>
          <p>
            <br /> portable magic"
            "A Book is uniquely
          </p>
        </div>
        <div className='row2 text-end'>
          <h2>Find Your Book</h2>
          <div className='search'>
            <input
              type='text'
              placeholder='Enter your Book Name..'
              onKeyUp={handleFilter}
            />
          </div>
          <img
            src='../assets/images/imgbin_charlottes-web-artists-book-reading-book-review-png.png'
            alt='logo'
          />
        </div>
      </div>
      <div className='book-list-bottom row'>
        {filteredData.length > 0
          ? filteredData.length &&
            filteredData.map((item, index) => (
              <div key={index} className='col-lg-3 col-md-6 col-sm-12'>
                <div className='book-i'>
                  <div>
                    <img className='book-img' src={item.image_url} alt='item' />
                  </div>
                  <div className='h2_title'>
                    <h6>
                      <Link
                        item={item}
                        className='title'
                        to={`/description/${item.id}`}
                      >
                        {item.title}
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            ))
          : books.length &&
            books.map((item, index) => (
              <div key={index} className='col-lg-3 col-md-6 col-sm-12'>
                <div className='book-i'>
                  <div>
                    <img
                      className='book-img'
                      src={item.image_url}
                      alt='item2'
                    />
                  </div>
                  <div className='h2_title'>
                    <b>
                      <Link
                        item={item}
                        className='title'
                        to={`/description/${item.id}`}
                      >
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
