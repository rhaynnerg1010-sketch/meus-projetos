import Navbar from "./Navbar"

const Header = ({children}) => {
  return (
  <header>
    <Navbar/>
    {children}
  </header>
  );
};

export default Header;