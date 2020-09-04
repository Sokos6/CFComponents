import React from 'react';

const Message = (props) => {
  let classes;
  switch (props.name) {
    case 'Will':
      classes = 'bg-warning p-2';
      break;
    case 'Dora':
      classes = 'bg-secondary text-white text-center p-2';
      break;
    default:
      classes = 'bg-success text-white text-center p-2';
  }
  return (
    <h4 className='bg-success text-white text-center p-2'>
      {props.greeting}, {props.name}
    </h4>
  );
};

export default Message;
