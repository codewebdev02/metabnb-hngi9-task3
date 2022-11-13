import { MdClose } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import MetaMaskLogo from "../../../assets/MetaMaskLogo.svg";
import WalletConnectLogo from "../../../assets/WalletConnectLogo.svg";
import "./style.scss";

const WalletConnectModal = ({openModal, setOpenModal}) => {
  return (
    <div className={"overLay " + (openModal && "toggleModal")}>
      <div className="WalletConnectModal">
        <div className="inWalletConnectModal">
          <div className="modalTittle">
            <h3>Connect Wallet</h3>
            <MdClose className="closeIcon" onClick={() => setOpenModal(false)} />
          </div>
          <div className="modalBody">
            <p>Choose your preferred wallet:</p>
            <button className="cBmOdal">
              <span><img src={MetaMaskLogo} alt="" /> Metamask</span>
              <IoIosArrowForward className="icon" />
            </button>
            <button className="cBmOdal">
              <span><img src={WalletConnectLogo} alt="" /> WalletConnect</span>
              <IoIosArrowForward className="icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletConnectModal;
