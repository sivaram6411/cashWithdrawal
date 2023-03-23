// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {initialBalance: 2000}

  updateBalance = value => {
    this.setState(prevBal => ({
      initialBalance: prevBal.initialBalance - value,
    }))
  }

  render() {
    const {initialBalance} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const initialName = name.slice(0, 1)

    return (
      <div className="container">
        <div className="sub-container">
          <div className="name-container">
            <div className="s-container">
              <p>{initialName}</p>
            </div>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <div className="update-balance">
              <p className="balance">{initialBalance}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose">CHOOSE SUM (IN RUPEES)</p>
          <ul className="order-list">
            {denominationsList.map(widthDraw => (
              <DenominationItem
                key={widthDraw.id}
                denominationDetails={widthDraw}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
