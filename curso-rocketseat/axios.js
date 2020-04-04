axios
  .get("https://api.github.com/users/duquedotdev")
  .then((response) => console.log(response.data.login))
  .catch((error) => console.warn(error));
