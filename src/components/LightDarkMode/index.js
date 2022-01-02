import {Component} from 'react'
import './index.css'

class Mode extends Component {
  state = {buttonText: 'Light Mode', mode: 'container dark'}

  changeMode = () => {
    this.setState(prevState => ({
      buttonText:
        prevState.buttonText === 'Dark Mode' ? 'Light Mode' : 'Dark Mode',
      mode:
        prevState.mode === 'container light'
          ? 'container dark'
          : 'container light',
    }))
  }

  render() {
    const {buttonText, mode} = this.state
    return (
      <div className="bg-container">
        <div className={mode}>
          <h1 className="mode">Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.changeMode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default Mode
