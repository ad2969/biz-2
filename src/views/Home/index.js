import React, { useState, useEffect } from 'react'

import { Card, Icon } from 'antd';

import { withAuthorization } from 'Session'

import COLORS from 'constants/colors'

import Laptop1Img from 'assets/media/laptop1img--small.png'
import Laptop2Img from 'assets/media/laptop2img--small.png'
import Laptop3Img from 'assets/media/laptop3img--small.png'
import Laptop4Img from 'assets/media/laptop4img--small.png'

import Good from 'assets/media/good.png'
import Best from 'assets/media/best.png'
import Great from 'assets/media/great.png'

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
    time: 50,
  },
  {
    name: 'HP 15.6" Touchscreen Laptop - Silver (Intel Core i5-1035G1/512GB SSD/8GB RAM/Windows 10) - English',
    stars: 0,
    reviews: 0,
    price: '949.99',
    time: 28,
  },
  {
    name: 'Lenovo 100e 11.6" Chromebook - Black (MediaTek MT8173C / 16GB eMMC / 4GB RAM / Chrome OS) - English',
    stars: 0,
    reviews: 0,
    price: '279.99',
    time: 15,
  },
  {
    name: 'Dell 15.6" Touchscreen Laptop - Black (Intel Core i3-8130U/128GB SSD/8GB RAM/Windows 10)',
    stars: 4,
    reviews: 12,
    price: '649.99',
    time: 7,
  },
]

const recommendationData = [
  {
    name: 'Microsoft Surface Book 2 15" 2-in-1 Laptop (Intel Core I5-8350U/256GB SSD/16GB RAM) - English',
    stars: 4,
    reviews: 21,
    price: '2,199.99',
    flag: 3, // best
  },
  {
    name: 'HP 15.6" Touchscreen Laptop - Silver (Intel Core i5-1035G1/512GB SSD/8GB RAM/Windows 10) - English',
    stars: 0,
    reviews: 0,
    price: '949.99',
    flag: 2, // great
  },
  {
    name: 'Lenovo 100e 11.6" Chromebook - Black (MediaTek MT8173C / 16GB eMMC / 4GB RAM / Chrome OS) - English',
    stars: 0,
    reviews: 0,
    price: '279.99',
    flag: 1, // good
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
          description={
          <React.Fragment>
            <div>$ {data.price}</div>
            <div>Time on Page: &nbsp;
              <span style={{ color: data.time > 40
                ? 'green'
                : data.time < 10
                  ? 'red'
                  : 'unset'}}
              >{data.time}s</span>
            </div>
          </React.Fragment>}
        />
      </Card>
    )
  }
  const createRecommendationCard = (data, index) => {
    let flag;
    if(data.flag && data.flag === 3) {
      flag = <img className="flagg" src={Best} alt="best" />
    } else if (data.flag && data.flag === 2) {
      flag = <img className="flagg" src={Great} alt="great" />
    } else if (data.flag && data.flag === 1) {
      flag = <img className="flagg" src={Good} alt="good" />
    } else {
      flag = <div></div>
    }

    return (
      <React.Fragment>
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
          description={'$ ' + data.price}
        />
        {flag}
      </Card>
      </React.Fragment>
    )
  }

  const [time, setTime] = useState(100)

  useEffect(() => {
    const addTime = () => {
      setTimeout(() => {setTime(time+1)}, 1000)
    }
    addTime()

  }, [time])
    
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
        <h1>You are viewing: <span style={{ color: COLORS.darkblue }}>User #12901</span></h1>
        <h5>Session Duration: {time}s</h5>
        <div className="row">
            <hr />
            <div className="main-text">User Budget:</div>
            <hr />
          <div className="column-4">
            <h1 className="title">User #12901's Recent Views</h1>
            {userViews}
            </div>
          <div className="column-6">
            <div className="row box">
              <div className="recomm-text">TOP RESULTS</div>
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
