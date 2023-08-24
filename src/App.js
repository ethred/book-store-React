import './App.css';
import './components/categories.css';
import { Route, Routes } from 'react-router-dom';
import Categories from './components/categories';
import Navigation from './components/navigation';
import Books from './components/books';

function App() {
  return (
    <>
      <section className="bookstoresection">
        <Navigation />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
