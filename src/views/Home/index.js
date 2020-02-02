import React, { useState, useEffect } from 'react'

import { Card, Icon } from 'antd';

import { withAuthorization } from 'Session'

import COLORS from 'constants/colors'

import Laptop1Img from 'assets/media/laptop1img--small.png'
import Laptop2Img from 'assets/media/laptop2img--small.png'
import Laptop3Img from 'assets/media/laptop3img--small.png'
import Laptop4Img from 'assets/media/laptop4img--small.png'

import Laptop0 from 'assets/laptop/0.png'
import Laptop1 from 'assets/laptop/1.png'
import Laptop2 from 'assets/laptop/2.png'
import Laptop3 from 'assets/laptop/3.png'
import Laptop4 from 'assets/laptop/4.png'
import Laptop5 from 'assets/laptop/5.png'
import Laptop6 from 'assets/laptop/6.png'
import Laptop7 from 'assets/laptop/7.png'

import Good from 'assets/media/good.png'
import Best from 'assets/media/best.png'
import Great from 'assets/media/great.png'

import Chat from 'components/Chat'

import bb from 'assets/media/bestbuy-bs--small.png'

const images = [
  Laptop1Img,
  Laptop2Img,
  Laptop3Img,
  Laptop4Img,
]

const laptops = [
  Laptop0,
  Laptop1,
  Laptop2,
  Laptop3,
  Laptop4,
  Laptop5,
  Laptop6,
  Laptop7,
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
    name: 'HP EliteBook 830 G5 13.3" Laptop (Intel Core i5-8350u / 8GB RAM / 256GB SSD / Windows 10 Pro / 3 Year Warranty) - (2FZ83AV)',
    stars: 5,
    reviews: 123,
    price: '1,499.99',
    flag: 3, // best
  },
  {
    name: 'HP EliteBook 850 G5 15.6" Touchscreen LCD Notebook - Intel Core i5 (8th Gen) i5-8250U Quad-core (4 Core) 1.60 GHz - 8GB DDR4',
    stars: 5,
    reviews: 1,
    price: '1,700.96',
    flag: 2, // great
  },
  {
    name: 'HP EliteBook 840 G5 14" LCD Notebook - Intel Core i7 (8th Gen) i7-8550U Quad-core (4 Core) 1.80 GHz - 16GB DDR4 SDRAM - 512GB',
    stars: 5,
    reviews: 2,
    price: '1,759.99',
    flag: 1, // good
  },
  {
    name: 'Microsoft Surface Book 2 15" 2-in-1 Laptop - Silver (Intel Core i7-8650U/256GB SSD/16GB RAM)-English',
    stars: 5,
    reviews: 367,
    price: '2,799.99',
  },
  {
    name: 'Lenovo ThinkPad X1 Yoga 14" Laptop (Intel Core i7-8650U - 16GB RAM - 512GB SSD - 20LD001HUS)',
    stars: 4,
    reviews: 1,
    price: '2,149.99',
  },
  {
    name: 'Dell Latitude E6230 12.5" Laptop (Intel Core i5 3320m / 4GB RAM / 128GB SSD / Win 10 Pro) - Refurbished',
    stars: 5,
    reviews: 2,
    price: '289.99',
  },
  {
    name: 'HP ProBook x360 11 G1 EE 11.6" Touchscreen LCD 2 in 1 Notebook - Intel Pentium N4200 Quad-core (4 Core) 1.10 GHz - 4GB DDR3L',
    stars: 5,
    reviews: 1,
    price: '1,213.99',
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
          <img alt="example" src={laptops[index]} />
        }
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
  const [ chatStatus, setChatStatus ] = useState(false)


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
            <div className="main-text">User Budget: $1,499.99</div>
            <hr />
          <div className="column-4">
            <h1 className="title">User #12901's Recent Views</h1>
            {userViews}
            </div>
          <div className="column-6">
            <div className="row box">
              <div className="recomm-text">TOP RECOMMENDATIONS</div>
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
      <div style={{ display: chatStatus && 'none' }} className="chatbutton">
        <img src={bb} onClick={() => {setChatStatus(true)}} alt="pullup"/>
      </div>
      <Chat active={chatStatus} chatFunction={setChatStatus} />
    </div>
  )
}


const condition = authUser => !!authUser

export default withAuthorization(condition)(HomePage)
