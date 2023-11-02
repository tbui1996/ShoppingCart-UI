import React from 'react';
import logo from './logo.svg';
import './App.css';
import {QueryClient, QueryClientProvider} from 'react-query';
import Home from './Home/Home';
const queryClient = new QueryClient();

function App() {
  return (
   <QueryClientProvider client={queryClient}>
    <Home />
   </QueryClientProvider>
  );
}

export default App;
