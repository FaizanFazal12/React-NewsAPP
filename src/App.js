import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 5;
  const apiKey = "c946fb4df74a4acd9a2cd2041cfa765d"
  const [progress, setProgress] = useState(0)
 
    return (
      <div>
        <Router>
        <Navbar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />

<Switch>
    <Route exact path="/">
      <News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />
    </Route>
    <Route path="/business">
      <News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />
    </Route>
    <Route path="/entertainment">
      <News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />
    </Route>
    <Route path="/general">
      <News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />
    </Route>
    <Route path="/health">
      <News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />
    </Route>
    <Route path="/science">
      <News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />
    </Route>
    <Route path="/sports">
      <News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />
    </Route>
    <Route path="/technology">
      <News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />
    </Route>
  </Switch>
  
</Router>

      </div>
    )
 
}

export default App;