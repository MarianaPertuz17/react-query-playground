import './App.css'
import { Dashboard } from './screens/dashboard'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { PaginatedCharacters } from './screens/paginatedCharacters';
import { routes } from './routes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.HOME} element={<Dashboard/>}/>
        <Route path={routes.CHARACTERS} element={<PaginatedCharacters/>}/>
      </Routes>
    </Router>

  )
}

export default App
