import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import Login from './Components/Login/Login';
import AddProduct from './Components/AddProduct/AddProduct';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Register from './Components/Register/Register'
import YourProducts from './Components/YourProducts/YourProducts';
// import OneProduct from './Components/OneProduct/OneProduct';
import Cart from './Components/Cart/Cart';
import UpdateProduct from './Components/UpdateProduct/UpdateProduct';
import SingleProduct from './Components/SingleProduct/SingleProduct';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Navbar/>
      <Routes>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='/' element={<Homepage/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/add-product' element={<AddProduct/>}/>
        <Route path='/your-products' element={<YourProducts/>}/>
        <Route path='/single-product/:id' element={<SingleProduct/>}/>
        <Route path='/update-product/:id' element={<UpdateProduct/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
      {/* <Footer/> */}
      
    </div>
  );
}

export default App;

