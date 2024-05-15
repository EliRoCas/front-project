import './App.css'

// Se importan los componentes para el cliente 
import CompShowClients from './Component/CompShowClients'
import CompAddClients from './Component/CompAddClients'
import CompEditClients from './Component/CompEditClients'

// Se importan los componentes para el producto
import CompShowProducts from './Component/CompShowProduct'
import CompAddProduct from './Component/CompAddProduct'
import CompEditProducts from './Component/CompEditProduct'


import CompFooter from './Component/CompFooter'

// Se importan las rutas (Router)
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <div className="App">
        <header className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="/login" >
                Login
              </a>
              <button
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                className="navbar-toggler"
                data-bs-target="#navbarNav"
                data-bs-toggle="collapse"
                type="button"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item" >
                    <a aria-current="page" className="nav-link active" href="/">
                      Inicio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/apiClients/clients" >
                      Clientes
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/apiClients/products">
                      Productos
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/suppliers" className="nav-link" >
                      Proveedores
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <BrowserRouter>
          {/* Se definen las rutas de la aplicación */}
          <Routes>
            {/* en el path agregamos el nombre de la ruta que verá nuestro usuario 
          Cuando la URL coincide exactamente con "/clients/", se renderizará el componente dado*/}
            <Route path='/apiClients/clients/' element={<CompShowClients />} />
            <Route path='/apiClients/clients/add/' element={<CompAddClients />} />
            <Route path='/apiClients/clients/edit/:id' element={<CompEditClients />} />

            <Route path='/apiClients/products/' element={<CompShowProducts />} />
            <Route path='/apiClients/products/add/' element={<CompAddProduct/>} />
            <Route path='/apiClients/products/edit/:id/' element={<CompEditProducts/>} />


            
          </Routes>
        </BrowserRouter>

        <CompFooter />
      </div>
    </>
  )
}

export default App
