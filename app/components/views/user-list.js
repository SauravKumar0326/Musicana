import React from 'react';
import { Link } from 'react-router';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Clearfix} from 'react-bootstrap';


// Using "Stateless Functional Components"
export default function(props) {
  return (
      <div className="data-list mydata-list">
        <div className='user-list-header'>List of Artists</div>
        <hr></hr>
        {props.users.map(user => {
              user.full_name = user.full_name?user.full_name:user.username;
              return (
                <div key={user.id} className="data-list-item">
                  <div className="details">
                    <Link to={'/'+user.id}>
                      <Row className="show-grid">
                        <Col md={2} sm={4} className="">
                          <img className="user-profile-image img" src={user.avatar_url} />
                        </Col>
                        <Col  md={8} sm={8} className="">
                          <div id="userlistInfo">
                              <h3>{user.full_name}</h3>
                              <div className="user-subdetail">
                                <h4>Country:{user.country}</h4>
                                <h4>City:{user.city}</h4>
                                <h4>Playlists:{user.playlist_count}</h4>
                                <h4>Followers:{user.followers_count}</h4>
                              </div>
                              </div>
                        </Col>
                      </Row>
                    </Link>
               </div>
              </div>
            );
        })}
     </div>
  );
}
