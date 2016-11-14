import React from 'react';
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
    <header className="search-header">
         <Navbar collapseOnSelect>
           <Navbar.Header>
            <Navbar.Brand>
               <a href="#">Musicana</a>
             </Navbar.Brand>
           </Navbar.Header>
         </Navbar>
       </header>
  );
}
