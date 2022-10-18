"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const firebase_config_1 = __importDefault(require("../firebase-config"));
const route = (0, express_1.Router)();
const notification_options = {
    priority: "high",
    timeToLive: 60 * 60 * 24,
};
route.post("/notification", (req, res) => {
    const registrationToken = req.body.token;
    const message_notification = {
        notification: req.body.notification
    };
    const options = notification_options;
    console.log(message_notification);
    firebase_config_1.default
        .messaging()
        .sendToDevice(registrationToken, message_notification, options)
        .then((response) => {
        res
            .status(200)
            .send(`Notification sent successfully ${response.data}`);
    })
        .catch((error) => {
        console.log(error);
    });
});
exports.default = route;
