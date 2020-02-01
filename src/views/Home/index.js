import React from 'react'

import { Card, Icon } from 'antd';

import { withAuthorization } from 'Session'

import Laptop1Img from 'assets/media/laptop1img--small.png'
import Laptop2Img from 'assets/media/laptop2img--small.png'
import Laptop3Img from 'assets/media/laptop3img--small.png'
import Laptop4Img from 'assets/media/laptop4img--small.png'

const images = [
  Laptop1Img,
  Laptop2Img,
  Laptop3Img,
  Laptop4Img,
]

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

const recommendationData = [
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

const HomePage = () => {
  const createCard = (data, index) => {
    return (
      <Card
        key={`card-${data.name}`}
        style={{ width: '90%', margin: '2rem auto' }}
        cover={
          <img alt="example" src={images[index]} />
        }
        actions={[
          <Icon type="setting" key="setting" />,
          <Icon type="share-alt" />,
          <Icon type="ellipsis" key="ellipsis" />,
        ]}
      >
        <Card.Meta
          title={data.name}
          description={data.price}
        />
      </Card>
    )
  }
  const createRecommendationCard = (data, index, flag) => {
    return (
      <Card
        key={`card-${data.name}`}
        style={{ width: '90%', margin: '2rem auto' }}
        cover={
          <img alt="example" src={images[index]} />
        }
        actions={[
          <Icon type="setting" key="setting" />,
          <Icon type="share-alt" />,
          <Icon type="ellipsis" key="ellipsis" />,
        ]}
      >
        <Card.Meta
          title={data.name}
          description={data.price}
        />
      </Card>
    )
  }
  
  const userViews = []
 
  data.forEach((item, index) => {
    userViews.push(createCard(item, index))
  })

  const recommendations = []

  recommendationData.forEach((item, index) => {
    recommendations.push(createRecommendationCard(item, index))
  })

  const halfway = parseInt(recommendations.length / 2)
  
  console.log({halfway}, recommendations.length)

  const recommendations1 = [...recommendations].splice(0, halfway)
  const recommendations2 = [...recommendations].splice(halfway, recommendations.length)
  
  return (
    <div className="Home">
      <div className="container">
        <h1>User #12901</h1>
        <div className="row">
            <hr />
            <div className="main-text">User Budget:</div>
            <hr />
          <div className="column-4">
            <h1 className="title">User Views</h1>
            {userViews}
            </div>
          <div className="column-6">
            <div className="row">
              <div className="column">
                {recommendations1}
              </div>
              <div className="column">
                {recommendations2}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


const condition = authUser => !!authUser

export default withAuthorization(condition)(HomePage)
