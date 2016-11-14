import React from 'react';
import {Link} from 'react-router';
import Header from '../layouts/header';
import {msToTime,formatBytes} from '../../helper/utils';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Clearfix} from 'react-bootstrap';

// Using "Stateless Functional Components"
export default function(props) {
  var playlistHeader="";

  if(props.tracks && props.tracks.tracks){
    playlistHeader =(
      <Col xs={6} sm={12} md={9} className="track-results">
      	<Row>
      	<Col className="track-image" md={2}  >
      		<img  className= "img-rounded img" src={props.tracks.artwork_url}  ></img>
      		{/*<span className="glyphicon glyphicon-play"> </span>*/}
      	 </Col>
      	<Col  md={8}  >
      	  <div className="track-detail">
        		<h3><strong>{props.tracks.title}</strong></h3>
        		<h4>{props.tracks.description}</h4>
        		<h4>By: {props.tracks.user.username}</h4>
        		<h4>Tracks: {props.tracks.track_count}</h4>
      		</div>
      	</Col>
          </Row>
       </Col>
    );
  };

  var tracks="";
  if(props.tracks && props.tracks.tracks && props.tracks.tracks.length ){
    tracks=(
      <div>
        {props.tracks.tracks.map(track => {

          return (
            <div key={track.id} className="data-list-item">
              <div className="details">
                  <Row className="show-grid">
                    <Col md={2} className="search-results">
                    <span className="glyphicon glyphicon-play"> </span>
                      <img className="dropdown-profile-image img track-list-image" src={track.artwork_url} />
                    </Col>
                    <Col  md={8} className="search-results">
                      <div>
                        <h3><a>{track.title}</a></h3>
                        <div className="user-subdetail">
                          <h4 className="track-list-detail">Duration:{msToTime(track.duration)}</h4>
                          <h4 className="track-list-detail">Size:{formatBytes(track.original_content_size)}</h4>
                          <h4 className="track-list-detail">Play count:{track.playback_count}</h4>
                          <h4 className="track-list-detail">Download count:{track.download_count}</h4>
                          <h4 className="track-list-detail">Favorites:{track.favoritings_count}</h4>
                        </div>
                        </div>
                    </Col>
                  </Row>
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
          {playlistHeader}
        </Row>
        <Row className="show-grid">
          <Col xs={6} sm={12} md={9} className="search-results  track-results-background">
            {tracks}
          </Col>
        </Row>
      </Grid>
    </div>
  );
}
