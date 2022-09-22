import { scrollToTop } from "../utils/utils";
import Header from './Header';

const Nav = () => (
    <Header>
      <button type="button" onClick={() => scrollToTop(true)}>
        Pokédex
      </button>
    </Header>
);

export default Nav;