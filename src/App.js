import './App.css';
import React, { useState } from 'react';
import ProductList from './ProductList';
import SearchBar from './SearchBar';


function App() {
  const [searchTerm, setSearchTerm] = useState('');
 
  return (
    <>
    <div className='plp'>
      <h1>PLP</h1>
      </div>
      
        <SearchBar onSearch={setSearchTerm}/>
      
      
    <div className="App">
      
      <ProductList searchTerm={searchTerm}/>
    
    </div>
    </>
  );
}

export default App;
