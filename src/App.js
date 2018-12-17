import React, { Component } from 'react';
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import { Grid } from 'semantic-ui-react';

import './App.css';
import NewAlbum from './NewAlbum';
import AlbumsListLoader from './AlbumsListLoader';

import aws_exports from './aws-exports';

Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <Grid padded>
        <Grid.Column>
          <NewAlbum />
          <AlbumsListLoader />
        </Grid.Column>
      </Grid>
    );
  }
}

// wrap protected page around using HoC
export default withAuthenticator(App, { includeGreetings: true });
