import './App.css';
// import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import Authors from './components/Authors';
import BookDescription from './components/BookDescription';
import AuthorDescription from './components/AuthorDescription';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<BookList />} />
        <Route path='/description/:id' element={<BookDescription />} />
        <Route path='/authdescription/:aName' element={<AuthorDescription />} />
        <Route path='/authors' element={<Authors />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
