import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import WishForm from "./pages/WishForm";
import WishesList from "./pages/WishesList";
import Cake from "./pages/Cake";
import Auth from "./pages/Auth";
import ThankYou from "./pages/ThankYou";
import Lunch from "./pages/Lunch";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/send-wish" element={<WishForm />} />
        <Route path="/wishes" element={<WishesList />} />
        <Route path="/cake-cutting" element={<Cake />} />
        <Route path="/admin" element={<Auth />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/lunch-event" element={<Lunch />} />
      </Routes>
    </Router>
  );
};

export default App;
