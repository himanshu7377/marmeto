import React, { useEffect, useState } from 'react';
import '../style/ProductList.css';

function ProductList({ searchTerm }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //  API endpoint URL
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

  function highlightSearchQuery(text, query) {
    if (!query) return text;

    //  regular expression to match the search query, case-insensitive
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
    <div>
      <div className="outer-box">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <div className='product-img'>
              <img src={product.product_image} alt={product.product_title} />
            </div>
            <div className="product-details">
              <h1> {highlightSearchQuery(product.product_title, searchTerm)}</h1>
              <ul>
                {product.product_variants.map((variant, variantIndex) => (
                  <div className='product-varients' >
                    <li key={variantIndex}>{highlightSearchQuery(Object.values(variant), searchTerm)}</li>
                  </div>
                ))}
              </ul>
              <p className='product_batch'>{product.product_badge}</p>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
