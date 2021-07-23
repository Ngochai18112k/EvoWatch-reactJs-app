import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './assets/styles/base.scss';
import './assets/styles/bootstrap.min.css';
import './assets/styles/responsive.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import { CartProvider } from './features/Contexts/CartProvider';
import ModalProvider from './features/Contexts/ModalProvider';
import routes from './routers/routers';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Router>
          <ModalProvider>
            {/* Header */}
            <Header></Header>
            {/* Container */}
            <Switch>
              {
                routes.map((e, i) => {
                  return (
                    <Route exact={e.exact} path={e.path} key="">
                      {e.main}
                    </Route>
                  );
                })
              }
              <Route path="/">
                <Home></Home>
              </Route>
            </Switch>
            {/* Footer */}
            <Footer></Footer>
          </ModalProvider>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
