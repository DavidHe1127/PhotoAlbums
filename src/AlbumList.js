import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Grid, List } from 'semantic-ui-react';

import * as utils from 'utils';
import NewAlbum from './NewAlbum';
import AlbumsListLoader from './AlbumsListLoader';
import AlbumDetailsLoader from './AlbumDetailsLoader';

class AlbumsList extends React.Component {
  albumItems() {
    return this.props.albums.sort(utils.makeComparator('name')).map(album =>
      <List.Item key={album.id}>
        <NavLink to={`/albums/${album.id}`}>{album.name}</NavLink>
      </List.Item>
    );
  }

  render() {
    return (
      <Router>
        <Grid padded>
          <Grid.Column>
            <Route path="/" exact component={NewAlbum}/>
            <Route path="/" exact component={AlbumsListLoader}/>
            <Route
              path="/albums/:albumId"
              render={ () => <div><NavLink to='/'>Back to Albums list</NavLink></div> }
            />
            <Route
              path="/albums/:albumId"
              render={ props => <AlbumDetailsLoader id={props.match.params.albumId}/> }
            />
          </Grid.Column>
        </Grid>
      </Router>
    );
  }
}

export default AlbumsList;
