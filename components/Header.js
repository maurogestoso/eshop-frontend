import Nav from "./Nav";

const Header = () => (
  <header>
    <div className="topbar">
      <a href="">eShop</a>
    </div>
    <Nav />
    <div className="searchbar">
      <p>Search</p>
    </div>
    <div className="cart">Cart</div>
  </header>
);

export default Header;
