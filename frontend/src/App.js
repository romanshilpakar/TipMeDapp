import abi from "./contract/TipMe.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import "./App.css";
import Tipping from "./components/Tipping";
import Tips from "./components/Tips";
import tipimage from "./tip.png";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  const [account, setAccount] = useState("None");
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x546C8339a39F23616C7E4EE5581d46B2e46a3b7f";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          setAccount(account);
          setState({ provider, signer, contract });
        } else {
          alert("Please install metamask");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);
  return (
    <div style={{ backgroundColor: "#EFEFEF", height: "100%" }}>
      <img src={tipimage} className="img-fluid" alt=".." width="100%" />
      <p
        class="text-muted lead "
        style={{ marginTop: "10px", marginLeft: "5px" }}
      >
        <small>Connected Account - {account}</small>
      </p>
      <div className="App">
        <Tipping state={state} />
        <Tips state={state} />
      </div>
    </div>
  );
}

export default App;
