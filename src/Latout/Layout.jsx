import { Helmet } from "react-helmet";
import NavBar from "../component/NabBar/NavBar";
import Footer from "../component/Footer/Footer";

const Layout = ({ children, title }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <header>
        <NavBar></NavBar>
      </header>
      <main>{children}</main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Layout;
