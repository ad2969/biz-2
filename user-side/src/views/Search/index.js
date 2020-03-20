import React from 'react'

import ItemList from 'components/Items'
import Sidebar from 'assets/media/search--toolbar.png'

const SearchPage = () => (
  <div className="Search">
    <div className="container">
      <h4 className="nav">
        Home &nbsp;
        <span className="no">{'>'}</span> &nbsp; Computers &nbsp; & &nbsp; Tablets &nbsp;
        <span className="no">{'>'}</span> &nbsp; Laptops & MacBooks &nbsp;
        <span className="no">{'>'}</span> &nbsp; 2 in 1 Laptops &nbsp;
        <span className="no">{'>'}</span>
        &nbsp; Product Details
      </h4>
      <h1 className="title">{'Microsoft Surface Book 2 15" 2-in-1 Laptop (Intel Core I5-8350U/256GB SSD/16GB RAM) - English'}</h1>
      <hr className="content"/>
      <div style={{ display: 'flex' }}>
        <img className="sidebar" src={Sidebar} alt="sidebar"/>
        <ItemList />
      </div>
    </div>
  </div>
)

export default SearchPage
