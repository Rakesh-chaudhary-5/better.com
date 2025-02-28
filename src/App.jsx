import { Outlet, useLocation } from "react-router";
import Header from "./components/Header.jsx";
import { MyProvider } from "./contexts/MenuContext.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const location = useLocation();

  return (
    <MyProvider>
      {location.pathname !== "/start" && <Header />}
      <Outlet />
      <Footer />
    </MyProvider>
  );
}

export default App;
