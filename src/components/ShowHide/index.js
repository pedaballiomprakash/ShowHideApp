import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    isFirstName: false,
    isSecondName: false,
  }

  onLast = () => {
    this.setState(prevState => ({isSecondName: !prevState.isSecondName}))
  }

  onFirst = () => {
    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
  }

  render() {
    const {isFirstName, isSecondName} = this.state
    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="two-btn-name-container">
          <div className="name-container">
            <button
              type="button"
              className="name-button"
              onClick={this.onFirst}
            >
              Show/Hide Firstname
            </button>

            {isFirstName && <p className="name">Joe</p>}
          </div>
          <div className="name-container">
            <button type="button" className="name-button" onClick={this.onLast}>
              Show/Hide Lastname
            </button>
            {isSecondName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
