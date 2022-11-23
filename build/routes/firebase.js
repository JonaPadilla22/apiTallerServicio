"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const firebase_1 = require("../controllers/firebase");
const route = (0, express_1.Router)();
route.post("/registerToken/:id", firebase_1.FirebaseController.registerToken);
route.post("/deleteToken", firebase_1.FirebaseController.deleteToken);
route.post("/notification/:id", firebase_1.FirebaseController.sendNotifications);
exports.default = route;
