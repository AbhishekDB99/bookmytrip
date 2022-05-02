import React from 'react'
import Homepage from './pages/home/index'
import Header from './components/header/header'
import Result from './pages/home/resultpage/Result';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
const App = () => {
  return (
    <>
    <Header/>
    <Router>
    <Routes>
              <Route path="/" element={<Homepage/>}>
              </Route>
              <Route exact path="/result" element={<Result />}>
              </Route>
            </Routes>
    </Router>
    </>
  )
}

export default App