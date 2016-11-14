import React from 'react';
import { Link } from 'react-router';
import SearchFormContainer from '../containers/search-form-container';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="app">
      <main>
        {props.children}
      </main>
    </div>
    );
}
