import React from 'react'
import ReactDOM from 'react-dom/client'
import { Menu } from './Menu.jsx'
import { CrearVenta } from './Routes/CrearVenta.jsx'
import { SelecctCliente } from './Componentes/SelecctCliente.jsx'
import { BuscadorClientes } from './Componentes/BuscadorClientes.jsx'
import { NavBar } from './Componentes/NavBar.jsx'
import App from './Componentes/App.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <App/>
  </BrowserRouter>
)
