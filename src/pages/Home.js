import { useMemo } from "react";
import PokemonCard from "../components/PokemonCard";
import Loader from "../components/Loader";
import Nav from '../components/Nav';
import Spinner from "../components/Spinner";
import {
  usePokemonState,
  usePokemonSetter,
  useIntersectionObserver,
} from "../hooks";
import "./Home.scss";

const Home = () => {
  const { pokemonsList, isLoading, isLoadingNextBatch } = usePokemonState();
  const { loadPokemons } = usePokemonSetter();
  const ref = useIntersectionObserver(loadPokemons, [
    isLoading,
    isLoadingNextBatch,
  ]);

  const renderPokemonsList = useMemo(
    () =>
      pokemonsList?.map((data) => (
        <PokemonCard key={data.id} pokemonData={data} />
      )),
    [pokemonsList]
  );

  if (isLoading) return <Loader />;

  return (
    <main className="app-root">
      <Nav />
      <div className="card-list">{renderPokemonsList}</div>
      {isLoadingNextBatch && <Spinner />}
      <div className="hidden-load-more" ref={ref} />
    </main>
  );
};

export default Home;