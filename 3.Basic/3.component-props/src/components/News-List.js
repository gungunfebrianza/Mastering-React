import React from 'react';

const newstList = props => {
  //console.log(props);

  const items = props.news.map(item => {
    return (
      <div
        key={
          item.id // Must have a key for looping
        }
      >
        <h3>{item.title}</h3>
        <div>{item.feed}</div>
      </div>
    );
  });

  return <div>{items}</div>;
};

export default newstList;
