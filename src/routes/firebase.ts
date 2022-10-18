import { Router } from "express";
import admin from "../firebase-config";

const route = Router();

const notification_options = {
  priority: "high",
  timeToLive: 60 * 60 * 24,
};

route.post("/notification", (req, res) => {
  const registrationToken = req.body.token;
  const message = "Hola Mundo";
  const options = notification_options;

  admin
    .messaging()
    .sendToDevice(registrationToken, message, options)
    .then((response: any) => {
      res
        .status(200)
        .send(
          `Notification sent successfully ${response.data}`
        );
    })
    .catch((error: any) => {
      console.log(error);
    });
});

export default route;