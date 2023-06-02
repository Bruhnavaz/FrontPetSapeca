import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import {createBrowserRouter,RouterProvider,} from "react-router-dom"
import './index.css'
import Home from './pages/home/index.jsx'
import Login from './pages/login'
import Cadastrar from './pages/cadastrar/index.jsx'
import Carrinho from '../src/pages/carrinho'
import Banner from './pages/banner'
import Produtos from './pages/produtos'
// import HomeAdmin from './pages/homeAdmin'
 import Favoritos from './pages/favoritos/index.jsx'
import Fornecedor from './pages/fornecedor'
//import CreateUser from './pages/create'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/cadastrar",
    element: <Cadastrar />,
  },
 
  {
    path: "/carrinho",
    element: <Carrinho />,
  },
  {
    path: "/banner",
    element: <Banner />,
  },
  {
    path: "/produtos",
    element: <Produtos />,
  },
  // {
  //   path: "/homeAdmin",
  //   element: <HomeAdmin />,
  // },
   {
     path: "/favoritos",
     element: <Favoritos />,
   },
  {
    path: "/fornecedor",
    element: <Fornecedor />,
  },
]);

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
