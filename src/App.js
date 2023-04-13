import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect, Fragment} from 'react'
import Hero from './pages/Hero'
import About from './pages/About'
import Contact from './pages/Contact'
import Rates from './components/Rates'
import Navbar from './components/Navbar'
import ScrollToTop from 'react-scroll-up'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { css, cx } from '@emotion/react'
import PropagateLoader from "react-spinners/PropagateLoader";
import CaseStudies from './components/CaseStudies';
import ChacorneEnterprises from './components/case-studies/ChacorneEnterprises';
import mungiCompany from './components/case-studies/mungiCompany';
import Piranha from './components/case-studies/piranhaSystems';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import "react-whatsapp-chat-widget/index.css";
import WhatsApp2 from './components/WhatsAppWidget2';
const override = css`
  display: block;
  margin: 0 auto;
  justify-items: center;
  top: 280px;
  border-color: red;
`;

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    
    setTimeout(()=>{
    setLoading(false)
    }, 3500)

  },[])
  
  return (
    <Router>
    <div className="App">
       <Sidebar/>
      {
        loading ?

        
        <PropagateLoader
       
        color={"#000000"}  
        loading={loading}
        css={override}  
        size={40} />
        :
        
        <Switch>
        <Route path="/" exact component={Hero}/>
        <Route path="/about" exact component={About}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/ChacorneEnterprises" exact component={ChacorneEnterprises}/>
        <Route path="/piranha" exact component={Piranha}/>
        <Route path="/mungiCompany" exact component={mungiCompany}/>
        <Route path="/rates" exact component={Rates}/>
        </Switch>
       
      
      }
     
     
      
    </div>

   
  
    <ScrollToTop  style={{position: 'fixed',
                           bottom: 60,
                          right: 40,
                           
                           cursor: 'pointer',
                          transitionDuration: '1.6s',
                           transitionTimingFunction: 'linear',
                          transitionDelay: '.5s'}} showUnder={165}>
           <span >
             <svg xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-gray-800" 
              viewBox="0 0 20 20"
               fill="currentColor">
          <path fill-rule="evenodd"
           d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" 
           clip-rule="evenodd" />
          </svg>
          </span>
      </ScrollToTop>
    </Router>
  );
}

export default App;
