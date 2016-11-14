import React from 'react';
import SearchFormContainer from '../containers/search-form-container';
import UserlistContainer from '../containers/user-list-container';
import Header from '../layouts/header';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Clearfix} from 'react-bootstrap';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="search">
    <Header></Header>
      <Grid>
        <Row className="show-grid">
          <Col xs={6} sm={12} md={9}>
            <SearchFormContainer searchType={props.searchType} />
          </Col>
        </Row>
        <Row className="show-grid">
        <Col xs={6} sm={12} md={9} className="search-results">
          {props.children}
        </Col>
        </Row>
        <footer className="search-footer">
          {/*Shows number of results*/}
          {props.totalResults} Results
        </footer>
     </Grid>

    </div>
    );
}
