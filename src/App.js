import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './assets/styles/bootstrap.min.css';
import './assets/styles/base.scss';
import { useEffect } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Modal from './components/Modal/Modal';
import routes from './routers/routers';
import { CartProvider } from './features/Contexts/CartProvider';
import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyADxG0KsfObDcl3Fzhqc_-RmH3uEKGWGaY',
  authDomain: 'evo-watch-auth.firebaseapp.com',
};
firebase.initializeApp(config);

function App() {
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        return;
      }
      //const token = await user.getIdToken();
    });

    return () => unregisterAuthObserver();
  }, []);

  return (
    <CartProvider>
      <div className="App">
        <Router>
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
          {/* Modal */}
          <Modal></Modal>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
