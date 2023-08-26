import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Books_API } from '../API_URLs';
import '../styles/book-description.css';
import { Link } from 'react-router-dom';

export default function BookDescription() {
  const { id } = useParams();
  const [book, setBook] = useState({});
  useEffect(() => {
    var fetchBooks = async () => {
      let response = await axios.get(Books_API);
      let data = response.data;
      let filteredData = data.filter((item) => item.id == id);
      setBook(filteredData[0]);
    };
    fetchBooks();
  }, [id]);
  console.log(book);
  return (
    <div>
      <div>
        <div className='nav'>
          <div>
            <Link className='bookDescLink' to={`/`}>
              Books
            </Link>
          </div>
          <div>
            <Link className='bookDescLink' to={`/authors`}>
              Authors
            </Link>
          </div>
        </div>
      </div>
      <div className='book-description'>
        <div className='description-flex'>
          <div className='desc-img-div'>
            <img className='desc-img' src={book.image_url} alt='books'/>
          </div>
          <div className='description-info'>
            <p>
              <h4>
                <b>TITLE : </b> <i>{book.title}</i>
              </h4>
            </p>
            <p>
              <h4>
                <b>AUTHORS : </b> <i>{book.authors}</i>
              </h4>
            </p>
            <p>
              <h4>
                <b>PAGES : </b> <i>{book.num_pages}</i>
              </h4>
            </p>
            <p>
              <h4>
                <b>RATING : </b> <i>{book.rating}</i>
              </h4>
            </p>
            <p>
              <h4>
                <b>RATING COUNT : </b> <i>{book.rating_count}</i>
              </h4>
            </p>
            <p>
              <h4>
                <b>REVIEW COUNT : </b> <i>{book.review_count}</i>
              </h4>
            </p>
            <p>
              <h4>
                <b>GENRES : </b> <i>{book.genres}</i>
              </h4>
            </p>
          </div>
        </div>
        <div>
          <h2 className='desc-desc'>{`${book.Quote1}`}</h2>
        </div>
        <div className='desc-desc'>
          <p>{book.description}</p>
        </div>
        <div>
          <h3 className='desc-desc'>{`${book.Quote2}`}</h3>
        </div>
      </div>
    </div>
  );
}
