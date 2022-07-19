import React from 'react';
import AutoContextProvider from './context/AutoContextProvider';

import AppRouter from './router/AppRouter';

const App = () => {
  return (
     <AutoContextProvider>
        <AppRouter/>
     </AutoContextProvider>
   
     
   
  );
};

export default App;
