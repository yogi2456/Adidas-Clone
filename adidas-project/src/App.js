import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Homepage';
// import Navbar from './Components/Navbar';
import FakeStoreAllProducts from './Components/FakeStoreAllProducts';
import FakeStoreSingleProduct from './Components/FakeStoreSingleProduct';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/fake-store-all-products' element={<FakeStoreAllProducts/>}/>
        <Route path='fake-store-single-product/:id' element={<FakeStoreSingleProduct/>} />
      </Routes>
      
    </div>
  );
}

export default App;
