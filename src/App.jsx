import { Outlet } from "react-router";
import Header from "./components/Header.jsx";
import { MyProvider } from "./contexts/MenuContext.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <MyProvider>
      <Header />
      <Outlet />
      <Footer />
    </MyProvider>
  );
}

export default App;
