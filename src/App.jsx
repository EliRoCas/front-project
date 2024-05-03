import './App.css'

// Se importan los componentes 
import CompShowClients from './Component/CompShowClients'
import CompAddClients from './Component/CompAddClients'

// Se importan las rutas (Router)
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        {/* Se definen las rutas de la aplicación */}
        <Routes>
          {/* en el path agregamos el nombre de la ruta que verá nuestro usuario 
          Cuando la URL coincide exactamente con "/clients/", se renderizará el componente dado*/}
          <Route path='/clients/' element={<CompShowClients />} />
          <Route path='/clients/add/' element={<CompAddClients />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
