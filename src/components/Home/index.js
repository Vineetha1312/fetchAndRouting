import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'
import UserInfo from '../UserInfo'
import BlogList from '../BlogList'

class Home extends Component {
  state = {isLoading: false}

  renderHome = () => (
    <div className="home-container" data-testid="loader">
      <UserInfo />
      <BlogList />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="black" height={50} width={50} />
          </div>
        ) : (
          this.renderHome()
        )}
      </div>
    )
  }
}

export default Home
