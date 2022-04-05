import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import Review from './components/Review/Review';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Product from './components/Product/Product';
import NotFound from './components/NotFound/NotFound';
import Dashboard from './components/Dashboard/Dashboard';
// import ReviewRating from './components/Dashboard/ReviewRating/ReviewRating';

function App() {
  return (
    <div className="App">
    <Menu></Menu>
    <Routes>
    <Route path="/" element={<Header></Header>}></Route>
    <Route path="/header" element={<Header></Header>}></Route>
    <Route path="/dashboard" element={<Dashboard/>}>
      {/* <Route path="" element={<ReviewRating/>}></Route> */}
    </Route>
    <Route path="/review" element={<Review/>}></Route>
    <Route path="/product" element={<Product/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="*"      element={<NotFound/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
