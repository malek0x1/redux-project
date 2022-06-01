import { useSelector } from 'react-redux';
import './css/App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import LoginPage from './components/login';

function App() {
  const isLoggedin = useSelector((state) => state.posts.isLogin);
  const show = () => {
    return (
      <div className="App">
        <Sidebar />
        <Main />
      </div>
    )
  }

  return (

    <>

      {isLoggedin ? show() : (<LoginPage />)}

    </>
  );
}

export default App;
