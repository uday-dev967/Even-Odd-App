import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {isEven: true, count: 0}

  onIncrement = () => {
    console.log('clicked')
    const inc = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + inc}))
    const {count} = this.state
    const presntCount = count + inc
    const evenOrOdd = presntCount % 2 !== 0
    this.setState(() => ({isEven: evenOrOdd > 0 ? 0 : 1}))
  }

  render() {
    const {isEven, count} = this.state
    const num = isEven ? 'Count is Even' : 'Count is Odd'
    return (
      <div className="main-container">
        <div className="container">
          <h1 className="heading">Count {count}</h1>
          <p className="num">{num}</p>
          <button className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="tag">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
