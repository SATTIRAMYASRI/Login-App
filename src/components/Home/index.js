// Write your code here

import {Component} from 'react'

import './index.css'

import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {isLoggedIn: false}

  onclickBtn = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
    const {isLoggedIn} = this.state
    console.log(isLoggedIn)
  }

  render() {
    const {isLoggedIn} = this.state
    const result = isLoggedIn ? (
      <Logout logout={this.onclickBtn} />
    ) : (
      <Login login={this.onclickBtn} />
    )

    return (
      <div className="bg-container">
        <div className="card-container">
          <Message isLoggedIn={isLoggedIn} />
          {result}
        </div>
      </div>
    )
  }
}

export default Home
