import React, { useEffect, useState } from 'react';
import './Productcard.css'

function ProductList({searchTerm}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = "https://mocki.io/v1/0934df88-6bf7-41fd-9e59-4fb7b8758093";

    // Function to fetch product data
    async function fetchProductData() {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        const productData = responseData.data; // Access the data property
        setProducts(productData); // Set the product data in state
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    }

    // Call the fetchProductData function
    fetchProductData();
  }, []); // The empty array [] means this effect runs once after the initial render

  
  function highlightSearchQuery(text, query) {
    if (!query) return text;

    // Create a regular expression to match the search query, case-insensitive
    const regex = new RegExp(`(${query})`, 'gi');

    // Split the text into parts that match the query and the rest
    const parts = text.split(regex);

    // Use map to wrap matching portions in a span with a highlight class
    return parts.map((part, index) => (
      regex.test(part) ? <span className="highlight" key={index}>{part}</span> : part
    ));
  }
  
  
  
  
  
  

  return (
    <div>
        
    <div className="center-container"> 
   
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <div className='product-img'>
            <img src={product.product_image} alt={product.product_title} />
          </div>
          <div className="product-details">
            <h1> {highlightSearchQuery(product.product_title, searchTerm)}</h1>
            <ul>
              {product.product_variants.map((variant, variantIndex) => (
                <div className='product-varients'>
                <li key={variantIndex} >{highlightSearchQuery(Object.values(variant).join(' '), searchTerm)}</li>
                </div>
              ))}
            </ul>
            <p className='product_batch'>{product.product_badge}</p>
            {/* Render other product information here */}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default ProductList;
