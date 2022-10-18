let admin = require("firebase-admin");

let serviceAccount = require("./testing-firebase-db.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sample-project-e1a84.firebaseio.com",
});

export default admin;