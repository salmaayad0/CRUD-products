//style 
import './App.css';
//raect & router
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
//pages 
import Layout from './pages/Layout';
import Home from './pages/Home';
import Details from './pages/Details';
import AddProduct from './pages/AddProduct';
import UpdateProduct from './pages/UpdateProduct';
import Products from "./pages/Products";
import NotFound from './pages/NotFound';
//redux 
import { useDispatch } from 'react-redux';
import { getAllProducts } from './Redux/slices/productSlice';


function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllProducts());
  },[]);
  
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='Products' element={<Products />} />
        <Route path='Products/Add' element={<AddProduct />} />
        <Route path='Products/update/:id' element={<UpdateProduct />} />
        <Route path='Products/:productId' element={<Details />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
