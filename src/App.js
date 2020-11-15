import './App.css';
import Header from './components/ui/header'
import NavbarApp from './components/ui/navbarApp';
import { Provider } from 'react-redux';

import store from './components/redux/store';
function App() {
  return (
    <Provider store={store}>
      <>
        <NavbarApp />
        <Header />
      </>
      </Provider>

  );
}

export default App;
// 
