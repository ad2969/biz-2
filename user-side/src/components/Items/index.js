import React from 'react'

import Item from './item'
import Img1 from 'assets/media/laptop1img--small.png'
import Img2 from 'assets/media/laptop2img--small.png'
import Img3 from 'assets/media/laptop3img--small.png'
import Img4 from 'assets/media/laptop4img--small.png'

import * as ROUTES from 'constants/routes'

const data = [
  {
    name: 'Microsoft Surface Book 2 15" 2-in-1 Laptop (Intel Core I5-8350U/256GB SSD/16GB RAM) - English',
    stars: 4,
    reviews: 21,
    price: '2,199.99',
  },
  {
    name: 'HP 15.6" Touchscreen Laptop - Silver (Intel Core i5-1035G1/512GB SSD/8GB RAM/Windows 10) - English',
    stars: 0,
    reviews: 0,
    price: '949.99',
  },
  {
    name: 'Lenovo 100e 11.6" Chromebook - Black (MediaTek MT8173C / 16GB eMMC / 4GB RAM / Chrome OS) - English',
    stars: 0,
    reviews: 0,
    price: '279.99',
  },
  {
    name: 'Dell 15.6" Touchscreen Laptop - Black (Intel Core i3-8130U/128GB SSD/8GB RAM/Windows 10)',
    stars: 4,
    reviews: 12,
    price: '649.99',
  },
]

export default class ItemList extends React.Component {
  render () {
    return (
      <div className="ItemList">
        <div className="row">
          <div className="column-4">
            <Item req={Img1} text={data[0]} link={ROUTES.PRODUCTONE}/>
          </div>
          <div className="column-4">
            <Item req={Img2} text={data[1]} link={ROUTES.PRODUCTTWO}/>
          </div>
          <div className="column-4">
            <Item req={Img3} text={data[2]} link={ROUTES.PRODUCTTHREE}/>
          </div>
          <div className="column-4">
            <Item req={Img4} text={data[3]}/>
          </div>
        </div>
        <div className="row">
          <div className="column-4">
            <Item req={Img2} text={data[1]}/>
          </div>
          <div className="column-4">
            <Item req={Img1} text={data[0]} />
          </div>
          <div className="column-4">
            <Item req={Img4} text={data[3]}/>
          </div>
          <div className="column-4">
            <Item req={Img3} text={data[2]}/>
          </div>
        </div>
      </div>
    )
  }
}