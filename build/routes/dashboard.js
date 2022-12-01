"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboard_1 = require("../controllers/dashboard");
const route = (0, express_1.Router)();
route.get('/', dashboard_1.DashboardController.general);
exports.default = route;
