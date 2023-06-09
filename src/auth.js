/**
 * This represents some generic auth provider API, like Firebase.
 */
const appAuthProvider = {
  isAuthenticated: false,
  signin(callback) {
    const data = {
      email: "thardik41@gmail.com",
      password: "abc123",
    };
    fetch("http://localhost:8000/auth/login", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => {
        console.error("Error processing login request");
      });

    appAuthProvider.isAuthenticated = true;
    callback();
  },
  signout(callback) {
    appAuthProvider.isAuthenticated = false;
    callback();
  },
};

export { appAuthProvider };
