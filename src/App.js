import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from './components/Loader';
import { PokemonProvider } from './contexts/PokemonProvider';
import { ROUTES } from './constants/routepaths';
import Home from './pages/Home';

const PokemonDetails = lazy(() => import("./pages/PokemonDetails"))

export default function App() {
  return (
    <PokemonProvider>
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={`${ROUTES.DETAILS}/:id`} element={<PokemonDetails />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </PokemonProvider>
  )
}