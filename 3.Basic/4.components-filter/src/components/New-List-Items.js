import React from 'react';

const NewsItem = ({ item }) => {
  //console.log(item);

  return (
    <div className="news_item">
      <h3>{item.title}</h3>
      <div>{item.feed}</div>
    </div>
  );
};

export default NewsItem;

/* const NewsItem = props => {
  console.log(props);

  return (
    <div
      key={
        props.item.id // Must have a key for looping
      }
    >
      <h3>{props.item.title}</h3>
      <div>{props.item.feed}</div>
    </div>
  );
}; */
