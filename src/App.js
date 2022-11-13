import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WalletConnectModal from "./components/Modal/WalletModal";
import Community from "./pages/Community";
import Home from "./pages/Home";
import Nfts from "./pages/Nfts";
import PlaceToStay from "./pages/PlaceToStay";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <Header setOpenModal={setOpenModal} />
      <WalletConnectModal openModal={openModal} setOpenModal={setOpenModal} />
      <Routes>
        <Route path="/" exact element={<Home openModal={openModal} setOpenModal={setOpenModal}/>} />
        <Route path="/place-to-stay" element={<PlaceToStay />} />
        <Route path="/nfts" element={<Nfts />} />
        <Route path="/community" element={<Community />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
