// == Import npm
import React from 'react';
import Header from 'src/components/Header';
import Categories from 'src/components/Categories';


// == Import
import './styles.scss';

// == Composant
const ToutSurApp = () => (
  <div className="toutSurApp">
    <Header/>
    <Categories/> 
  </div>
);

// == Export
export default ToutSurApp;
