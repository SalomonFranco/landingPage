import Form from "./components/form";
import Header from "./components/header";
import mainImage from "./images/illustration-dashboard.png";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <Form />
      <img
        src={mainImage}
        alt="mainImage"
        className="w-full max-w-[400px] mx-auto block"      />
     <Footer/>
    </div>
  );
}

export default App;
