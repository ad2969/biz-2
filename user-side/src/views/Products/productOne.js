import React from 'react'
import { Icon, Tooltip } from 'antd'
import COLORS from 'constants/colors'

import LaptopImg from 'assets/media/laptop1img.png'
import LaptopSpec from 'assets/media/laptop1spec.png'
import Guru from 'assets/media/bestbuy-bs--small.png'

const ProductOne = (props) => (
  <div className="Product">
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
      <span className="rate">
        <Icon type="star" theme="filled" style={{ color: COLORS.yellowStar }} />
        <Icon type="star" theme="filled" style={{ color: COLORS.yellowStar }} />
        <Icon type="star" theme="filled" style={{ color: COLORS.yellowStar }} />
        <Icon type="star" theme="filled" style={{ color: COLORS.yellowStar }} />
        <Icon type="star" style={{ color: COLORS.yellowStar }} />
      </span>
      <span style={{ color: 'darkblue' }}>{'(34)'} &nbsp;&nbsp;&nbsp; {'Write a review >'}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span><strong>Model Number: </strong>QKK-00001</span>&nbsp;&nbsp;&nbsp;
      <span><strong>Web Code: </strong>13548822</span>

      <hr style={{ marginTop: '2rem', marginBottom: '2rem', color: 'lightgrey' }} />

      <div className="row">
        <div className="column guru--wrapper">
          <img style={{ maxWidth: '100%' }} src={LaptopImg} alt="img"/>
          <div className="guru--button">
            <Tooltip placement="top" title="Get Expert Help!">
              <img src={Guru} onClick={() => { props.chatFunction(true) }} alt="guru"/>
            </Tooltip>
          </div>
        </div>
        <div className="column">
          <img style={{ maxWidth: '100%' }} src={LaptopSpec} alt="spec"/>
        </div>
      </div>

    </div>
  </div>
)

export default ProductOne
