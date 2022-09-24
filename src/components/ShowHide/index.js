import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  shoHideFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  shoHideLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="container">
        <div className="content-container">
          <h1 className="heading">Show/Hide</h1>
          <div className="block-container">
            <div className="btn-container">
              <button
                onClick={this.shoHideFirstName}
                className="btn"
                type="button"
              >
                Show/Hide Firstname
              </button>
              {firstName && <p className="name-element">Joe</p>}
            </div>
            <div className="btn-container">
              <button
                onClick={this.shoHideLastName}
                className="btn"
                type="button"
              >
                Show/Hide Lastname
              </button>
              {lastName && <p className="name-element">Jonas</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
