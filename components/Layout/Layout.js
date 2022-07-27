import { Provider } from "react-redux";
import store from "../../redux/store";

const Layout = ({ children }) => {
  return (
    <Provider store={store}>
      <div className="layout">
        <header className="header">
          <h2 className="header__title">Currrent bitcoin price</h2>
        </header>
        <main className="main">{ children }</main>
        <footer className="footer">
          <span>This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org</span>
        </footer>
      </div>
    </Provider>
  )
}

export default Layout;