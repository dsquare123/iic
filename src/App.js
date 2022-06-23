import React from 'react';

import Header from './components/Header';
import Foooter from './components/Footer';
import People from './components/People';
import Contact from './components/Contact';
import Events from'./components/Events';
import Gallery from './components/Gallery';
import About from './components/About';
import Intro from './components/Intro';

import Notification from './components/Notification';
import Faq from './components/Faq';
import './App.css';
import Trail from './components/Trail';

function App() {
    return (
        <React.StrictMode>
            <Header/>
            <Notification/>
            <Intro/>
            <About/>
            <Trail/>
            <Events/>
            <Gallery/>
            <People/>
           <Faq/>
            <Contact/>
            <Foooter/>
        </React.StrictMode>
    );
}
export default App;
