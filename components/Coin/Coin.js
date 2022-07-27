import style from './Coin.module.css';
import Price from './Price/Price';
import Time from './Time/Time';

const Coin = ({chartName}) => {

  return(
    <div className={style.coin_continer}>
      <h3 className={style.title}>{`${chartName}`}</h3>
      <Price />
      <div className={style.time_bar}>
        <span className={style.time}>time to update:</span><Time />
      </div>
    </div>
  )
}

export default Coin;