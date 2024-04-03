import Header from "./Header";
import Footer from "./Footer";

function Index(props) {
  return (
    <>
      {/* {props.title} */}
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default Index;
