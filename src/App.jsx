import './App.css'

// Se importan los componentes 
import CompShowClients from './Component/CompShowClients'
import CompAddClients from './Component/CompAddClients'

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
                    <a className="nav-link" href="/clients" >
                      Clientes
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/products">
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
            <Route path='/clients/' element={<CompShowClients />} />
            <Route path='/clients/add/' element={<CompAddClients />} />
          </Routes>
        </BrowserRouter>

        <CompFooter />
      </div>
    </>
  )
}

export default App
