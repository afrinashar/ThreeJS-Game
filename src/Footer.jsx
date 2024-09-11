const Footer = ({ style, content }) => {
    return (
      <footer style={{ ...style, padding: '1rem', textAlign: 'center' }}>
        <p>{content}</p>
      </footer>
    );
  };
  
  export default Footer;
  