const serverUrl = "https://xxxxx/server";
const appId = "YOUR_APP_ID";
Moralis.start({ serverUrl, appId });

const login = () => {
    if (!Moralis.User.current()) {
      user = await Moralis.authenticate({
        type: "sol"
      })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user.get("solAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

const solanaAPICall = async () => {};
