import store from '../redux/store'
import { setCurrentCoin } from '../redux/coinPriceReducer'
import Coin from '../components/Coin/Coin'
import { getCurrentCoinName } from './api/api'
import { useEffect } from 'react'

export default function Home({name}) {

  return (
    <>
      <Coin chartName={name} />
    </>
  )
}

Home.getInitialProps = async (ctx) => {
  return getCurrentCoinName()
}
