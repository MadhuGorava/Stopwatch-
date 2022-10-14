// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {seconds: 0, minutes: 0}

  onStartBtn = () => {
    const {seconds} = this.state
    this.timerId = setInterval(() => {
      this.setState(prevState => ({seconds: prevState.seconds + 1}))

      if (seconds === 59) {
        this.setState(prevState => ({minutes: prevState.minutes + 1}))
        this.setState({seconds: 0})
      }
    }, 1000)
  }

  onStopBtn = () => {
    clearInterval(this.timerId)
  }

  onResetBtn = () => {
    this.setState({seconds: 0, minutes: 0})
  }

  render() {
    const {seconds, minutes} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="time-container">
          <div className="timer-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="image"
            />
            <p className="time-heading">Timer</p>
          </div>
          <h1 className="count-down">
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </h1>
          <div className="btn-container">
            <button
              type="button"
              onClick={this.onStartBtn}
              className="start-btn"
            >
              Start
            </button>
            <button type="button" onClick={this.onStopBtn} className="stop-btn">
              Stop
            </button>
            <button
              type="button"
              onClick={this.onResetBtn}
              className="reset-btn"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
