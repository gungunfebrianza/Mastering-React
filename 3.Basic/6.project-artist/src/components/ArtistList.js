import React from 'react';
import { Link } from 'react-router-dom';

const list = ({ allArtist }) => {
  if (allArtist) {
    return allArtist.map(item => {
      const style = {
        background: `url('/images/covers/${item.cover}.jpg') no-repeat`
      };

      return (
        <Link
          key={item.id}
          to={`/artist/${item.id}`}
          className="artist_item"
          style={style}
        >
          <div>{item.name}</div>
        </Link>
      );
    });
  }
};

const ArtistList = props => {
  console.log(props);
  return (
    <div className="artist_list">
      <h4>Browse The Artist</h4>
      {list(props)}
    </div>
  );
};

export default ArtistList;
