import Header from './components/ui/header'
import NavbarApp from './components/ui/navbarApp';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import Regular from './components/ui/Regular';
import Source from './components/ui/Source';
import Footer from './components/ui/footer'
function App() {
  return (
    <Provider store={store}>
      <div style={{backgroundColor:'#ffffff'}}>
        <NavbarApp />
        <Header />
        <Source />
        <Regular />
        <Footer/>
      </div>
    </Provider>

  );
}

export default App;
//
