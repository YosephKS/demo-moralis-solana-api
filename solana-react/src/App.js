import { Button } from "web3uikit";
import { useMoralisSolanaApi, useMoralisSolanaCall } from "react-moralis";

function App() {
  const { account } = useMoralisSolanaApi();

  // get devnet SPL NFT balance for a given address
  const options = {
    network: "devnet",
    address: "HsXZnF7Te7dZ5ijvGcDj3NWtxRBBaAuYQgh1oZLwAba2",
  };
  const { fetch: getSolanaPortfolio, data } = useMoralisSolanaCall(
    account.getPortfolio,
    options
  );

  console.log(data);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        flexDirection: "column",
        gap: "2",
      }}
    >
      <h1>Solana API Demo</h1>
      <Button
        text="Get Solana Portfolio"
        theme="primary"
        type="button"
        size="large"
        onClick={getSolanaPortfolio}
      />
    </div>
  );
}

export default App;
