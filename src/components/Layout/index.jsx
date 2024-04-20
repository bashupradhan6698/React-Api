import Header from "./Header";
import Footer from "./Footer";

function Index(props) {
  return (
    <>
      <Header cartCount={props.cartCount} />
      {props.children}
      <Footer />
    </>
  );
}

export default Index;
