import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoData: [], isLoading: true}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))
    this.setState({cryptoData: updatedData, isLoading: false})
  }

  render() {
    const {cryptoData, isLoading} = this.state
    return (
      <div className="container">
        <h1 className="main-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="crypto-logo"
        />
        <div className="coin-table">
          <div className="heading-row">
            <h1 className="coin-type">Coin Type</h1>
            <div className="price-info">
              <h1 className="usd-price">USD</h1>
              <h1 className="euro-price">EURO</h1>
            </div>
          </div>
          <ul className="crypto-list">
            {isLoading ? (
              <div data-testid="loader">
                <Loader type="rings" color="#ffffff" height={50} width={50} />
              </div>
            ) : (
              cryptoData.map(eachCrypto => (
                <CryptocurrencyItem
                  cryptoItem={eachCrypto}
                  key={eachCrypto.id}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
