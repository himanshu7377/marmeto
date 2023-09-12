import React, { useState } from 'react';
import '../style/Searchbar.css'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';

function SearchBar({ onSearch,toggleView }) {
  const [searchTerm, setSearchTermLocal] = useState('');

  // Function to handle input changes
  const handleInputChange = (e) => {
    setSearchTermLocal(e.target.value); // Use setSearchTermLocal to update the local state
    onSearch(e.target.value);
  };
  return (
    <div className='container'>
    
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleInputChange}
        
      />
      
      <FormatListBulletedIcon className='icon1' fontSize='large' onClick={toggleView}/>
        <GridViewIcon className='icon2' fontSize='large'  onClick={toggleView}/>
     
      </div>

    
  );
}

export default SearchBar;
