"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardController = void 0;
const dashboard_1 = require("../services/dashboard");
class DashboardController {
}
exports.DashboardController = DashboardController;
_a = DashboardController;
DashboardController.general = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield dashboard_1.DashboardService.getDashboardGeneral();
        res.json(response);
    }
    catch (e) {
        res.send(e);
    }
});
