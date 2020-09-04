import React from 'react';

const Message = (props) => {
  if (props.name === 'Will') {
    return (
      <h4 className='bg-warning p-2'>
        {props.greeting}, {props.name}
      </h4>
    );
  } else {
    return (
      <h4 className='bg-success text-white text-center p-2'>
        {props.greeting}, {props.name}
      </h4>
    );
  }
};

export default Message;
