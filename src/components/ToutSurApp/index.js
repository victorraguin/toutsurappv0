// == Import npm
import React, { useState, useEffect } from 'react';
import { Label, Segment } from 'semantic-ui-react';
import { Route, Switch, Link } from 'react-router-dom';

import axios from 'axios';

// == Import components & styles
import './styles.scss';
import Header from 'src/components/Header';
import Categories from 'src/components/Categories';
import Articles from 'src/components/Articles';
import SignUpForm from '../SignUpForm';


// == Data par default
  const initialFormUserData = ({
    email: '',
    password: '',
  });

  const initialFormSignUpData = ({
    name: '',
    email: '',
    password: '',
    confirmPassword:''
  })



// == Composant
const ToutSurApp = () => {

// == State de l'application
  const [cards, setCards] = useState([]);
  const [userLog, setUserLog] = useState(initialFormUserData);
  const [userSignUp, setUserSignUp] = useState(initialFormSignUpData);

  // == Fonctions de l'application
  const onInputLogUserChange = (name, value) => {
    setUserLog({
      ...userLog,
      [name]: value,
    });
  };

  const onFormSignUp = (name, value) => {
    setUserSignUp({
      ...userSignUp,
      [name]: value,
    });
  };

  const handleInputChange = (evt) => {
    // Je récupère le nom de l'input qui a changé
    // et sa value (son contenu)
    const { name, value } = evt.target;
    console.log(name, value);
    setUserSignUp(name, value);
    onFormSignUp(name, value);
  };

  const handleInputSubmit = (evt) => {
    evt.preventDefault();
    console.log('click submit', userSignUp);
    //je veux que password et confirm password soit equivalent !!!????
    //je recupere les mots de passes du state
    const {password, confirmPassword} = userSignUp;
    if (password !== confirmPassword) {
      <Label basic color='red' pointing='left'>
        Your passwords don't match
      </Label>;
    } else {
      //make API call
    }
    //quand je reset le form le state disparait?
    setUserSignUp({
      name:'',
      email:'',
      password:'',
      confirmPassword:''
    });
  };

  // == useEffect
  // == Appel à une API BACK
  useEffect(async () => {
    try {
      const dataFetched = await axios({
        method: 'get',
        url: 'https://toutsur-app-gachimaster.herokuapp.com/categories',
      });
      console.log(dataFetched);
      setCards(dataFetched.data);
    }
    catch (error) {
      console.log(error.message);
    }
  }, []);

  // == Rendu de l'application
  return (
    <div className="toutSurApp">

      <Header />
      <Switch>
        <Route path="/" exact>
          <Categories list={cards} />
        </Route>
        <Route path="/articles" exact>
          <Articles />
        </Route>
        <Route path="/inscription" exact>
          <SignUpForm
          userSignUp={userSignUp}
          handleInputChange={handleInputChange}
          handleInputSubmit={handleInputSubmit}
          />
        </Route>
        <Route>
          <Link
            to="/"
            exact
          >
            <Segment vertical>
              <h2>
                #Retour sur l'Accueil
              </h2>
            </Segment>
          </Link>
          <iframe src="https://giphy.com/embed/TLIj98vlSKpNXnkrBK" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen />
        </Route>
      </Switch>
    </div>
  );
};

// == Export
export default ToutSurApp;
