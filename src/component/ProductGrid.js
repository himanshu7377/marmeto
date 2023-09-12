import React, { useEffect, useState } from 'react';
import '../style/ProductGrid.css'; 

function ProductGrid({ searchTerm }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // API endpoint URL
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
  }, []); 

  // Function to highlight the search query in product 
  function highlightSearchQuery(text, query) {
    if (!query) return text;

    // Create a regular expression to match the search query, case-insensitive
    const regex = new RegExp(`(${query})`, 'gi');

    // Check if the text contains the query
    if (regex.test(text)) {
      return (
        <div className="highlight" key={text}>
          {text}
        </div>
      );
    }

    return text;
  }

  return (
    
        <div className="outer-box"> 
      {products.map((product, index) => (
        <div key={index} className="product-grid-item">
          <div className='product-img'>
            <img src={product.product_image} alt={product.product_title} />
          </div>
          <div className="product-details">
            <h1>{highlightSearchQuery(product.product_title, searchTerm)}</h1>
            <ul>
              {product.product_variants.map((variant, variantIndex) => (
                <div className='product-variants'>
                  <li key={variantIndex}>{highlightSearchQuery(Object.values(variant), searchTerm)}</li>
                </div>
              ))}
            </ul>
            <p className='product-batch'>{product.product_badge}</p>
            
          </div>
        </div>
      ))}
      </div>
    
  );
}

export default ProductGrid;
