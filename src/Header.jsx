import { Link } from "react-router-dom";
const Header = ({ style, title }) => {
    return (
      <header style={{ ...style, padding: '1rem', textAlign: 'center' }}>
      <Link style={{float: "left"}} className="btn btn-outline-light " to={-1} >Back</Link>  <h1 >{title}</h1>
      </header>
    );
  };
  
  export default Header;
  