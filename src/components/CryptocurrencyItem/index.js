import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoItem} = props
  const {currencyLogo, usdValue, euroValue, currencyName} = cryptoItem

  return (
    <li className="crypto-item">
      <div className="crypto-info">
        <img className="crypto-img" src={currencyLogo} alt={currencyName} />
        <p className="crypto-name">{currencyName}</p>
      </div>
      <div className="crypto-value">
        <p className="crypto-usd">{usdValue}</p>
        <p className="crypto-euro">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
