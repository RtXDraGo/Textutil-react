import './App.css';
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import Alerts from './component/Alerts';
import { useState } from 'react';
// import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';
function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (msg, cont) => {
    setAlert({
      title: msg,
      data: cont
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }
  const Toggle = () => {
    if (mode == 'dark') {
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
      document.title = "TextUtils-Light Mode"
    }
    else {
      document.body.style.backgroundColor = "#0D134A";
      setMode('dark')
      showAlert("Dark mode is enabled", "success");
      document.title = "TextUtils-Dark Mode"
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUTILS" mode={mode} toggle={Toggle} />
      <Alerts alert={alert} />
      <div className="container">
        {/* <Switch> */}
          {/* <Route exact path="/About">
            <About />
          </Route> */}
          {/* <Route exact path="/"> */}
          <TextForm head="Enter your text to Analyze" mode={mode} alert={showAlert}/>
          {/* </Route>
        </Switch>  */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
