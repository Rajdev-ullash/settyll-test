import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';
import { createContext, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';

export const UserContext = createContext();


function App() {
  const [data, setData] = useState([]);
  return (
    <UserContext.Provider value={{allData:[data, setData]}}>
     <Router>
       <Switch>
         <Route exact path="/">
           <Navbar></Navbar>
            <Home></Home>
         </Route>
         <Route path="/home">
           <Navbar></Navbar>
            <Home></Home>
         </Route>
         <Route path="/data/:id">
           <Navbar></Navbar>
            <Details></Details>
         </Route>
         <Route path="/dashboard">
           <Navbar></Navbar>
            <Dashboard></Dashboard>
         </Route>
       </Switch>
     </Router>
     </UserContext.Provider>
  );
}

export default App;
