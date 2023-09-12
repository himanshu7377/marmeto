import './App.css';
import React, { useState } from 'react';
import ProductList from './component/ProductList';
import ProductGrid from './component/ProductGrid';
import SearchBar from './component/SearchBar';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isListView, setIsListView] = useState(true);

  // Function to toggle between list and grid view
  const toggleView = () => {
    setIsListView((prevIsListView) => !prevIsListView);
  };

  return (
    <>
      <div className='plp'>
        <h1>PLP</h1>
      </div>

      
        
        <SearchBar onSearch={setSearchTerm}  toggleView={toggleView}/>
          {/* to toggle between list and grid view  */}
        <div className="product-list-container">
            {isListView ? (
                <ProductList searchTerm={searchTerm} />
                 ) : (
              <ProductGrid searchTerm={searchTerm} />
              )}
          </div>
      
    </>
  );
}

export default App;
