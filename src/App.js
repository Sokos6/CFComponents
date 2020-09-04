import React from 'react';
import Message from './Message';
import { Summary } from './Summary';

// Follow the commits
const App = () => {
  return (
    <div>
      <h1 className='bg-primary text-white text-center p-2'>
        Hello CF Student!
      </h1>
      <Message greeting='Hello' name='Will' />
      <Message greeting='Hola' name={'Meagan ' + 'Brewer'} />
      <Message greeting='Hi there' name='Dora'/>
      <Summary />
    </div>
  );
};

export default App;
