import React from 'react';
import './Products.css';
import ScrollIcon from './Group 103.png'; // Adjust the path based on the location of your image


function Products() {
  const products = [
    { id: 1, name: 'Crystal Agate Phone Grip', price: '$18.99' },
    { id: 2, name: 'Crystal Agate Phone Grip', price: '$18.99' },
    { id: 3, name: 'Crystal Agate Phone Grip', price: '$18.99' },
    { id: 4, name: 'Crystal Agate Phone Grip', price: '$18.99' },
    { id: 5, name: 'Crystal Agate Phone Grip', price: '$18.99' },
    { id: 6, name: 'Crystal Agate Phone Grip', price: '$18.99' },
    { id: 7, name: 'Crystal Agate Phone Grip', price: '$18.99' },
    { id: 8, name: 'Crystal Agate Phone Grip', price: '$18.99' }
  ];

  return (
    <section className="products-section">
        <div className="scroll-down">
        <img src={ScrollIcon} alt="Scroll Down" />
      </div>
      <h2>All Products</h2>
      <div class="filter-dropdown">
    <label for="product-filter">Filter:</label>
    <select id="product-filter">
        <option value="all">All Products</option>
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
        <option value="category3">Category 3</option>
    </select>
</div>

<div class="filter-dropdown">
    <label for="product-filter">Sort:</label>
    <select id="product-filter">
        <option value="all">Best Selling</option>
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
        <option value="category3">Category 3</option>
    </select>
</div>
      <div className="scroll-line"></div> {/* Scroll-like rectangular line */}
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src="https://s3-alpha-sig.figma.com/img/515a/3922/05949d981f0a7ab0ecb2d55fcf22b90f?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DvPk-RVEKsKia~4MWGPIdnJk1HGBcShriplX4cD~6azlzZ7Pd5XutQc9D93KUooMXSV~iR2KSlJd0nlykhAPEqmhdZZEQasy~dpEsEwflj6A2nC6UvsWWyLwzQJQW8MG6tWvLcaqPtjq9M6IM3CN2UUqNxKEShZXBm~gAdRbS57CwdbEtFH~GbDEbZfhb9KoyZZ7Zwz4Lii7K3-2z0mzIdSgFTXtl3TCgFMhzcFVZYOFo6XuCLlXVa7CyivUqx8pNBXzDWHG6O-LS7~J1ifOMnLvt-ncst~nxTQsutpv6BSmOz7PkOX8hWFkaNuv240Fk8lszaz9BUz5Pll-xkRJ0A__" alt={product.name} />
            <p>{product.name} - {product.price}</p>
            <button className="buy-now">Buy Now</button>
          </div>
        ))}
      </div>
      <button className="view-all">View All</button>


    </section>
    
  );
}

export default Products;
