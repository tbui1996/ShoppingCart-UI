import React from 'react';
import logo from './logo.svg';
import './App.css';
import {QueryClient, QueryClientProvider} from 'react-query';
import Home from './Home/Home';
import { RecoilRoot } from 'recoil';
import { ChakraProvider } from '@chakra-ui/react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10_000 // refresh data if unused for ten or more seconds
    }
  }
});
function App() {
  return (
    <ChakraProvider>
      <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </RecoilRoot>
    </ChakraProvider>
    
   
  );
}

export default App;
