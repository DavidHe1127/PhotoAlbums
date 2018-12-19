import React from 'react';
import { NavLink } from 'react-router-dom';
import { Segment, List, Header } from 'semantic-ui-react';

import * as utils from './utils';

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
      <Segment>
        <Header as='h3'>My Albums</Header>
        <List divided relaxed>
          {this.albumItems()}
        </List>
      </Segment>
    );
  }
}

export default AlbumsList;
