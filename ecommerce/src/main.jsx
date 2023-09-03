import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {router} from './router' //se importa el router
import { RouterProvider } from 'react-router-dom' //se importa el routerprovider para ocuparlo como un componente


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* este se convierte en un componente y lama el router  */}
    <RouterProvider router={router}/> 
  </React.StrictMode>,
)
