const serverUrl = "https://xxxxx/server";
const appId = "YOUR_APP_ID";
Moralis.start({ serverUrl, appId });

/**
 * @description Get Portfolio of an Address (SOL, SPL Token, SPL NFT address)
 *
 */
const getSolanaPortfolio = async () => {
  const options = {
    network: "devnet",
    address: "6XU36wCxWobLx5Rtsb58kmgAJKVYmMVqy4SHXxENAyAe",
  };
  const portfolio = await Moralis.SolanaAPI.account.getPortfolio(options);
  console.log(portfolio);
};

document.getElementById("get-portfolio").onclick = getSolanaPortfolio;
