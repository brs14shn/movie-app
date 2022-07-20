import React from 'react';
import { ToastContainer } from 'react-toastify';
import AutoContextProvider from './context/AutoContextProvider';

import AppRouter from './router/AppRouter';

const App = () => {
  return (
     <AutoContextProvider>
        <AppRouter/>
        <ToastContainer/>
     </AutoContextProvider>
   
     
   
  );
};

export default App;
