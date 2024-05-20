import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import Login from './Components/Login/Login';
import AddProduct from './Components/AddProduct/AddProduct';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Register from './Components/Register/Register'

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='/' element={<Homepage/>} />
        {/* <Route path='/fake-store-all-products' element={<FakeStoreAllProducts/>}/>
        <Route path='/fake-store-single-product/:id' element={<FakeStoreSingleProduct/>} /> */}
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/add-product' element={<AddProduct/>}/>
      </Routes>
      {/* <Footer/> */}
      
    </div>
  );
}

export default App;
