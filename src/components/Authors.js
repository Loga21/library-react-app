import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Authors_API } from '../API_URLs';
import '../styles/authors.css';
import { Link } from 'react-router-dom';
// import img from './images/pngwing.com.png';
// import { VscSearch } from 'react-icons/vsc';

export default function BookList() {
  const [authors, setAuthors] = useState([]);
  const [authFilteredData, setAuthFilteredData] = useState([]);
  useEffect(() => {
    let fetchBooks = async () => {
      let response = await axios.get(Authors_API);
      setAuthors(response.data);
    };
    fetchBooks();
  }, []);
  var handleAuthFilter = (e) => {
    var searchWord = e.target.value;
    console.log(e.target.value);
    var newFilter = authors?.filter((value) => {
      return value.person?.toLowerCase().includes(searchWord?.toLowerCase()); //{ || value.original_name.toLowerCase().includes(searchWord.toLowerCase());}
    });
    setAuthFilteredData(newFilter);
  };
  // var handleAuthKeys = () => {
  //   window.addEventListener('keyup', handleAuthFilter);
  // };
  console.log(authors);
  return (
    <div className='authors'>
      <div>
        <div className='nav'>
          <div>
            <Link className='authors_book' to={`/`}>
              Books
            </Link>
          </div>
          <div className='authors_author'>Authors</div>
        </div>
      </div>
      <div className='auth-header d-flex row align-items-center'>
        <div className='row1 text-white'>
          <h3>
            "A good novel tells us the truth about its hero
            <br />
            but a bad novel tells us the truth about its author."
          </h3>
        </div>
        <div className='row2 text-end'>
          <img src='../assets/images/pngwing.com.png' alt='author' />
          <h2>Seek Your Author</h2>
          <div className='search'>
            <input
              type='text'
              placeholder='Enter Author Name..'
              onKeyUp={handleAuthFilter}
            />
          </div>
        </div>
      </div>
      <div className='author-list-bottom row'>
        {authFilteredData.length > 0
          ? authFilteredData.length &&
            authFilteredData.map(
              (item, index) =>
                item.imgUrl && (
                  <div key={index} className='col-lg-3 col-md-6 col-sm-12'>
                    <div className='auth-i'>
                      <div>
                        <img className='auth-img' src={item.imgUrl} alt='items'/>
                      </div>
                      <div className='h2_title authorNameLink'>
                        <h6 className='authorNameLink'>
                          <Link
                            className='authorNameLink'
                            to={`/authdescription/${item.person}`}
                          >
                            {' '}
                            {item.person}
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                )
            )
          : authors.length &&
            authors.map((item, index) => (
              <div key={index} className='col-lg-3 col-md-6 col-sm-12'>
                <div className='auth-i'>
                  <div>
                    <img className='auth-img' src={item.imgUrl} height={250} alt='itemImg'/>
                  </div>
                  <div className='h2_title authorNameLink'>
                    <b>
                      <Link
                        className='authorNameLink'
                        to={`/authdescription/${item.person}`}
                      >
                        {' '}
                        {item.person}
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
