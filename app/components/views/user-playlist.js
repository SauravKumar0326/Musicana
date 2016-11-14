import React from 'react';
import {Link} from 'react-router';
import Header from '../layouts/header';
import {msToTime} from '../../helper/utils';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Clearfix} from 'react-bootstrap';

// Using "Stateless Functional Components"
export default function(props) {
  var userListHeader="";
  if(props.currentUser){
    userListHeader=(
      <Col  sm={12} md={9} className="track-results">
        <Row>
        <Col className="track-image  " md={2}  >
          <img  className= "img-rounded img" src={props.currentUser.avatar_url}  ></img>
          {/*<span className="glyphicon glyphicon-play"> </span>*/}
         </Col>
        <Col  md={8}  >
          <div className="track-detail">
            <h3><strong>{props.currentUser.full_name?props.currentUser.full_name:props.currentUser.username}</strong></h3>
            <h4>{props.currentUser.country}</h4>
            <h4>Playlists: {props.currentUser.playlist_count}</h4>
            <h4>Followers: {props.currentUser.followers_count}</h4>
          </div>
        </Col>
          </Row>
       </Col>
    );
  };
  /*Initializing playlist*/
  var playlists="";
  /*Populating playlist*/
  if(props.playlist && props.playlist.length){
    playlists=(
      <div>
      {props.playlist.map(album => {
        return (
          <div key={album.id} className="data-list-item">
            <div className="details">
              <Link to={'/'+album.user_id+'/'+album.id}>
                  <Row className="show-grid">
                    <Col md={2} className="search-results">
                      <img className="dropdown-profile-image img" src={album.artwork_url} />
                    </Col>
                    <Col  md={8} className="search-results">
                      <div id="userlistInfo">
                        <h3>{album.permalink}</h3>
                        <div className="user-subdetail">
                        <h4>Genre:{album.genre}</h4>
                        <h4>Track count:{album.track_count}</h4>
                        <h4>Duration:{msToTime(album.duration)}</h4>
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
    )
  }

  return (
    <div>
      <Header></Header>
      <Grid>
        <Row className="show-grid">
          {userListHeader}
        </Row>
        <Row className="">
          <Col  sm={12} md={9} className="search-results mydata-list play-list ">
            {playlists}
          </Col>
        </Row>
      </Grid>
    </div>
  );
}
