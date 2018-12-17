import React from 'react';
import { graphqlOperation } from 'aws-amplify';
import Connect from 'aws-amplify-react';
import AlbumDetails from './AlbumDetails';

const GetAlbum = `
  query GetAlbum($id: ID!) {
    getAlbum(id: $id) {
      id
      name
    }
  }
`;

class AlbumDetailsLoader extends React.Component {
  render() {
    return (
      <Connect query={graphqlOperation(GetAlbum, { id: this.props.id })}>
        {({ data, loading, errors }) => {
          if (loading) {
            return <div>Loading...</div>;
          }
          if (errors.length > 0) {
            return <div>{JSON.stringify(errors)}</div>;
          }
          if (!data.getAlbum) return;
          return <AlbumDetails album={data.getAlbum} />;
        }}
      </Connect>
    );
  }
}
