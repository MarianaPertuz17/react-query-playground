import './App.css'
import { Dashboard } from './screens/dashboard'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { PaginatedCharacters } from './screens/paginatedCharacters';
import { routes } from './routes';
import { InfiniteCharacters } from './screens/infiniteCharacters';
import { Posts } from './screens/posts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.HOME} element={<Dashboard/>}/>
        <Route path={routes.PAGINATION} element={<PaginatedCharacters/>}/>
        <Route path={routes.INFINITE} element={<InfiniteCharacters/>}/>
        <Route path={routes.POSTS} element={<Posts/>}/>
      </Routes>
    </Router>

  )
}

export default App
