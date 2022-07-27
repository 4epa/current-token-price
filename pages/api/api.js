export const getCurrentCoinName = async () => {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  const json = await res.json()
  return {name: json.chartName}
}

export const getCurrentCoinBpi = async () => {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  const json = await res.json()
  return json.bpi
}

export const getLastTimeUpdate = async () => {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  const json = await res.json()
  return json.time.updated
}