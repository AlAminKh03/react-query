import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import { HomePage } from './components/Home.page'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page'
import { SuperHeroesPage } from './components/SuperHeroes.page'
import RQSuperhero from './components/RQSuperhero.page'
import ParrallelQuries from './components/ParrallelQuries.page'
import RQdynamicParallel from './components/RQdynamicParallel.page'
import RQDefented from './components/RQDefented.page'
import PaginatedQueries from './components/PaginatedQueries.page'
import InfintieQueries from './components/InfintieQueries.page'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/super-heroes'>Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/super-heroes'>
              <SuperHeroesPage />
            </Route>
            <Route path='/rq-paginated'>
              <PaginatedQueries />
            </Route>
            <Route path='/rq-infiniteQueries'>
              <InfintieQueries />
            </Route>
            <Route path='/rq-super-heroes'>
              <RQSuperHeroesPage />
            </Route>
            <Route path='/rq-dynamically-superhero'>
              <RQdynamicParallel heroIds={[1, 4]} />
            </Route>
            <Route path='/rq-dependent'>
              <RQDefented email='alaminkhan@gmail.com' />
            </Route>
            <Route path='/parallelQuery'>
              <ParrallelQuries />
            </Route>
            <Route path='/rq-super-hero/:hero'>
              <RQSuperhero />
            </Route>
            <Route path='/'>
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  )
}

export default App
