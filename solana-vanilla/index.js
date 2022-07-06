const serverUrl = "";
const appId = "";
Moralis.start({ serverUrl, appId });

/**
 * @description Get Portfolio of an Address (SOL, SPL Token, SPL NFT address)
 *
 */
const getSolanaPortfolio = async () => {
  const options = {
    network: document.getElementById("network").value,
    address: document.getElementById("address").value,
  };
  const portfolio = await Moralis.SolanaAPI.account.getPortfolio(options);
  console.log(portfolio);
};

document.getElementById("get-portfolio").onclick = getSolanaPortfolio;
