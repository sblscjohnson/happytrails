import React from 'react'
import { Carousel } from 'react-responsive-carousel'

import './Home.scss'

class Home extends React.Component {

  render() {
    return (
      <div id='Home-parent'>
        <h1>Where will <em>life</em> take you?</h1>
        <Carousel>
          <div>
            <img src='https://www.nps.gov/yose/planyourvisit/images/mercedlakeandhd_kennykarst.jpg' alt='Yosemite' />
          </div>
          <div>
            <img src='https://www.outdoorproject.com/sites/default/files/styles/cboxshow/public/1446851650/kmtm-9.jpg?itok=gzLh6Ih6' alt='Biking' />
          </div>
          <div>
            <img src='http://socialpsychonline.com/wp-content/uploads/2016/03/roadtrip.jpg' alt='Road Trip' />
          </div>
        </Carousel>
      </div>
    )
  }
}

export default Home