import { ethers } from "ethers";
const Tipping = ({ state }) => {
  const tipMe = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    const tipamount = document.querySelector("#amount").value;
    console.log(name, message, contract);
    const amount = { value: ethers.utils.parseEther(tipamount) };
    // var amount = document.querySelector("#amount").value;
    // const tipamount = { value: ethers.utils.parseEther(amount) };
    // const tipamount = ethers.utils.parseEther(amount);
    const transaction = await contract.PayTip(name, message, amount);
    await transaction.wait();
    console.log("Transaction is done");
  };
  return (
    <>
      <div className="container-md" style={{ width: "50%", marginTop: "25px" }}>
        <form onSubmit={tipMe}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <input
              type="text"
              className="form-control"
              id="message"
              placeholder="Enter Your Message"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Amount</label>
            <input
              type="text"
              className="form-control"
              id="amount"
              placeholder="Enter Amount to Tip"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={!state.contract}
          >
            Tip
          </button>
        </form>
      </div>
    </>
  );
};
export default Tipping;
