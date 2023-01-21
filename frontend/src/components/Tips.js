import { useState, useEffect } from "react";
const Tips = ({ state }) => {
  const [tips, setTips] = useState([]);
  const { contract } = state;

  useEffect(() => {
    const tipsMessage = async () => {
      const tips = await contract.GetTips();
      setTips(tips);
    };
    contract && tipsMessage();
  }, [contract]);

  return (
    <>
      <p style={{ textAlign: "center", marginTop: "20px" }}>Messages</p>
      {tips.map((tip) => {
        return (
          <div
            className="container-fluid"
            style={{ width: "100%" }}
            key={Math.random()}
          >
            <table
              style={{
                marginBottom: "10px",
              }}
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      backgroundColor: "#96D4D4",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "300px",
                    }}
                  >
                    {tip.name}
                  </td>
                  <td
                    style={{
                      backgroundColor: "#96D4D4",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "300px",
                    }}
                  >
                    {new Date(tip.timestamp * 1000).toLocaleString()}
                  </td>
                  <td
                    style={{
                      backgroundColor: "#96D4D4",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "500px",
                    }}
                  >
                    {tip.message}
                  </td>
                  <td
                    style={{
                      backgroundColor: "#96D4D4",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "300px",
                    }}
                  >
                    {tip.from}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </>
  );
};
export default Tips;
