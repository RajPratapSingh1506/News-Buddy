import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NewsItems from './components/NewsItems';
import Footer from './components/Footer';
function App() {

  const [category,setCategory]=useState("general"); 

  return (
    <>
      <Navbar setCategory={setCategory}/>
      <NewsItems category={category}/>
      <Footer/>
    </>
  )
}

export default App;
