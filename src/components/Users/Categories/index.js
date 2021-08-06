// == Import npm
import React from 'react';
import {
  Card, Segment, Container, Grid,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Categorie from './Categorie';

// == Import
import './styles.scss';

// == Composant
const Categories = ({ list, onCategorieSelected }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <Container>
      <Segment vertical>
        <h1 className="title">
          #Accueil
        </h1>
      </Segment>

      <Segment vertical color="teal">
        <Segment vertical>
          <h3>Bienvenue sur toutSur.app !</h3><Link to="/inscription"> Pensez à vous inscrire !</Link>
        </Segment>
        <Card.Group className="card-group">
          <Grid columns={5} doubling relaxed>
            {
        list.map((card) => (
          <Grid.Column>
            <Categorie key={card.id} categorie={card} onCategorieSelected={onCategorieSelected} />
          </Grid.Column>
        ))
          }
          </Grid>
        </Card.Group>
      </Segment>
    </Container>
  </motion.div>
);

// == Export
export default Categories;
