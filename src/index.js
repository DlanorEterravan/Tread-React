import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from'./components/navbar/Navbar';
import Header from './components/Header/Header';
import AboutOur from './components/AboutOurProducts/AboutOur';
import Who from './components/whoIsUsing/who';
import Everything from './components/EverythingYouNeed/Everything';
import Fleet from './components/FleetYour/Fleet';
import Associations from './components/Associations/Associations';

const nav = ReactDOM.createRoot(document.getElementById('nav'));
nav.render(
  <Navbar />
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Header />
);

const who = ReactDOM.createRoot(document.getElementById("whoIs"));
who.render(
  <Who />
);

const section1 = ReactDOM.createRoot(document.getElementById("section1"));
section1.render(
  <AboutOur />
);

const everything = ReactDOM.createRoot(document.getElementById("section2"));
everything.render(
  <Everything />
);

const fleet = ReactDOM.createRoot(document.getElementById("section3"));
fleet.render(
  <Fleet />
);

const associations = ReactDOM.createRoot(document.getElementById("section4"));
associations.render(
  <Associations />
);

