import './App.css';
import Header from './components/ui/header'
import NavbarApp from './components/ui/navbarApp';
import { Provider } from 'react-redux';

import store from './components/redux/store';
import Regular from './components/ui/Regular';
import Banner from './components/ui/Banner';
import Source from './components/ui/Source';
function App() {
  return (
    <Provider store={store}>
      <>
        <NavbarApp />
        <Header />
        <Source />
        {/* <Banner /> */}
        <Regular />
      </>
    </Provider>

  );
}

export default App;
//
