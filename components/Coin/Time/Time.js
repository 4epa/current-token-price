import { connect } from 'react-redux'
import { getLastTimeUpdate } from '../../../pages/api/api'
import { setLastTimeUpdate } from '../../../redux/coinPriceReducer'
import { useEffect } from 'react'

const Time = (props) => {
  return <span>{props.time}</span>
}

const TimeContainer = (props) => {

  const updateTime = () => {
    getLastTimeUpdate().then( res => {
      props.setLastTimeUpdate(res)
      setTimeout(updateTime, 10000)
    })
  }

  useEffect(() => {
    updateTime()
  })

  return <Time {...props}/>
}

const mapStateToProps = (state) => {
  return {
    time: state.currentCoin.timeLastUpdate
  }
}


export default connect(mapStateToProps, {setLastTimeUpdate}) (TimeContainer)

