import React from 'react';
import {FormGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

export default React.createClass({
  getQuery: function() {
    return this.refs.search.value;
  },

  render: function() {
    var dropdown_list = "";
    if(this.props.dropdownUsers && this.props.dropdownUsers.length){
      dropdown_list = (
        this.props.dropdownUsers.map(user => {
          user.full_name = user.full_name?user.full_name:user.username;
          return (
            <div key={user.id}>
              <Link to={'/'+user.id}>
                <li className="list-group-item">
                  <Row className="show-grid">
                    <Col md={1} className="show-grid">
                      <img className="dropdown-profile-image" src={user.avatar_url} />
                    </Col>
                    <Col  md={4} className="">
                      {user.full_name}
                    </Col>
                 </Row>
                </li>
              </Link>
            </div>
          );
        })
      );
    }
    return (
      <form onSubmit={this.props.search} onChange={this.props.searchDropdown} className="search ">
  	    <Row>
    	     <Col md={10}>
              <input className="search-width search-textBox" type="text" ref="search" placeholder="Search..." />
      		    <div className='dropdown-container'>
                  <ul className="list-group " >
                    {dropdown_list}
                  </ul>
              </div>
    		   </Col>
  		     <Col md={2}>
              <button className="search-width">Search</button>
  	       </Col>
        </Row>
      </form>
    );
  }

});
