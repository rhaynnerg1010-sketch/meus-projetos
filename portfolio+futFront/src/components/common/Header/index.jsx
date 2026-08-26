import Navbar from "./NavBar/NavBar"

const Header = ({children}) => {
  return (
  <header>
    <Navbar/>
    {children}
  </header>
  );
};

export default Header;