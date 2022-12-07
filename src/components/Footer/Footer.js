import './footer.css'

const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer>{`© ${year} Copyright: martinjlarre.com`}</footer>;
  };
  
  export default Footer;



