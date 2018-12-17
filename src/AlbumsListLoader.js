import React from 'react';
import { Connect } from 'aws-amplify-react';
import { graphqlOperation } from 'aws-amplify';
import AlbumsList from './AlbumsList';

const listAlbums = `
  query ListAlbums {
    listAlbums(limit: 9999) {
      items {
        id
        name
      }
    }
  }
`;

const subscribeToNewAlbums = `
  subscription OnCreateAlbum {
    onCreateAlbum {
      id
      name
    }
  }
`;

class AlbumsListLoader extends React.Component {
  onNewAlbum = (prevQuery, newData) => {
    // When we get data about a new album,
    // we need to put in into an object
    // with the same shape as the original query results,
    // but with the new data added as well
    let updatedQuery = Object.assign({}, prevQuery);
    updatedQuery.listAlbums.items = prevQuery.listAlbums.items.concat([
      newData.onCreateAlbum
    ]);
    return updatedQuery;
  };

  render() {
    return (
      <Connect
        query={graphqlOperation(listAlbums)}
        subscription={graphqlOperation(subscribeToNewAlbums)}
        onSubscriptionMsg={this.onNewAlbum}
      >
        {({ data, loading, errors }) => {
          if (loading) {
            return <div>Loading...</div>;
          }
          if (!data.listAlbums) return;

          return <AlbumsList albums={data.listAlbums.items} />;
        }}
      </Connect>
    );
  }
}

export default AlbumsListLoader;
