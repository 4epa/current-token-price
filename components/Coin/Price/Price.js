import style from '../Coin.module.css'
import { connect } from 'react-redux'
import { getCurrentCoinBpi } from '../../../pages/api/api'
import { setBpi } from '../../../redux/coinPriceReducer'
import { useEffect } from 'react'

const Price = ({ratesArr}) => {

  const priceSymbol = (symbol) => {
    switch (symbol) {
      case "&#36;":
        return <span>&#36;</span>
      case "&pound;":
        return <span>&pound;</span>
      case "&euro;":
        return <span>&euro;</span>
    }
  }

  const rates = ratesArr.map((rate, id)=> {
    if (rate === undefined) return <span key={id}>loading...</span>
    return <div key={id} className={style.price}>{`${rate.code} - ${rate.rate_float}`} {priceSymbol(rate.symbol)}</div>
  })

  return <div>{rates}</div>
}

const PriceContainer = (props) => {

  const updateCurrentPrice = () => {
    getCurrentCoinBpi()
      .then(res => {
        props.setBpi(res)
        setTimeout(updateCurrentPrice, 10000)
      })
  }

  useEffect(() => {
    updateCurrentPrice()
  }, [])

  let ratesArr = [props.bpi.USD, props.bpi.GBP, props.bpi.EUR]

  return <Price ratesArr={ratesArr}/>
}

const mapStateToProps = (state) => {
  return {
    bpi: state.currentCoin.bpi
  }
}

export default connect(mapStateToProps, { setBpi }) (PriceContainer)