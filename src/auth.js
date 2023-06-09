/**
 * This represents some generic auth provider API, like Firebase.
 */
const appAuthProvider = {
  isAuthenticated: false,
  signin(email, password,callback) {
    const data = {
      email,
      password,
    };
    fetch("http://localhost:8000/auth/login", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((resp) => {
        callback(resp.id, resp.token);
      })
      .catch((error) => {
        console.error("Error processing login request");
      });

    appAuthProvider.isAuthenticated = true;
    
  },
  signout(callback) {
    appAuthProvider.isAuthenticated = false;
    callback();
  },
};

export { appAuthProvider };
